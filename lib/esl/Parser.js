"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.ParserEvent = exports.HeaderNames = void 0;
const xml2js = __importStar(require("xml2js"));
const buffer_1 = require("buffer");
const eventemitter2_1 = require("eventemitter2");
const Event_1 = require("./Event");
var HeaderNames;
(function (HeaderNames) {
    HeaderNames["ContentLength"] = "Content-Length";
    HeaderNames["ContentType"] = "Content-Type";
    HeaderNames["ReplyText"] = "Reply-Text";
    HeaderNames["EventName"] = "Event-Name";
    HeaderNames["EventSubclass"] = "Event-Subclass";
    HeaderNames["JobUuid"] = "Job-UUID";
})(HeaderNames = exports.HeaderNames || (exports.HeaderNames = {}));
var ParserEvent;
(function (ParserEvent) {
    ParserEvent["Error"] = "error";
    ParserEvent["Event"] = "esl::event";
})(ParserEvent = exports.ParserEvent || (exports.ParserEvent = {}));
class Parser extends eventemitter2_1.EventEmitter2 {
    constructor(socket, encoding = 'utf8') {
        super({
            wildcard: true,
            delimiter: '::',
            maxListeners: 25,
        });
        this.socket = socket;
        this.buffer = buffer_1.Buffer.alloc(0);
        this._bodyLen = 0;
        this._encoding = 'utf8';
        this._headers = {};
        this._encoding = encoding;
        socket.on('data', this._onData.bind(this));
        socket.on('end', this._onEnd.bind(this));
    }
    static parseHeaderText(text) {
        const lines = text.split('\n');
        const headers = {};
        for (let i = 0; i < lines.length; ++i) {
            const line = lines[i];
            if (!line)
                continue;
            const data = lines[i].split(': ');
            const key = data.shift();
            const value = decodeURIComponent(data.join(': '));
            if (!key)
                continue;
            if (key === HeaderNames.ContentLength)
                headers[key] = parseInt(value, 10);
            else
                headers[key] = value;
        }
        return headers;
    }
    static parsePlainBody(text) {
        const headerEnd = text.indexOf('\n\n');
        const headers = Parser.parseHeaderText(text.substring(0, headerEnd));
        const contentLengthHeader = headers[HeaderNames.ContentLength];
        let error = null;
        if (contentLengthHeader) {
            const len = parseInt(contentLengthHeader, 10);
            const start = headerEnd + 2;
            const end = start + len;
            if (end > text.length)
                error = new Error('Invalid content length for plain body.');
            else
                headers._body = text.substring(start, end);
        }
        return { error, headers };
    }
    static parseXmlBody(xmlText) {
        const parser = new xml2js.Parser({ explicitArray: false, explicitRoot: false });
        let error = null;
        let headers = {};
        parser.parseString(xmlText, (err, data) => {
            error = err;
            headers = data.headers;
            if (data.headers[HeaderNames.ContentLength])
                headers._body = data.body;
        });
        return { error, headers };
    }
    _onData(data) {
        this.buffer = buffer_1.Buffer.concat([this.buffer, data], this.buffer.length + data.length);
        if (this._bodyLen > 0)
            this._parseBody();
        else
            this._parseHeaders();
    }
    _onEnd() {
    }
    _indexOfHeaderEnd() {
        for (let i = 0, len = this.buffer.length - 1; i < len; ++i) {
            if (this.buffer[i] === 0x0a && this.buffer[i + 1] === 0x0a) {
                return i;
            }
        }
        return -1;
    }
    _parseHeaders() {
        const headEnd = this._indexOfHeaderEnd();
        if (headEnd === -1)
            return;
        const headText = this.buffer.toString(this._encoding, 0, headEnd);
        this.buffer = this.buffer.slice(headEnd + 2);
        this._headers = Parser.parseHeaderText(headText);
        const contentLengthHeader = this._headers[HeaderNames.ContentLength];
        if (contentLengthHeader) {
            this._bodyLen = parseInt(contentLengthHeader, 10);
            if (this.buffer.length)
                this._parseBody();
        }
        else {
            this._parseEvent('');
            if (this.buffer.length)
                this._parseHeaders();
        }
    }
    _parseBody() {
        if (this.buffer.length < this._bodyLen)
            return;
        const body = this.buffer.toString(this._encoding, 0, this._bodyLen);
        this.buffer = this.buffer.slice(this._bodyLen);
        this._bodyLen = 0;
        this._parseEvent(body);
        this._parseHeaders();
    }
    _parseEvent(body) {
        let data = null;
        switch (this._headers[HeaderNames.ContentType]) {
            case 'text/event-json': {
                try {
                    data = JSON.parse(body);
                }
                catch (e) {
                    this.emit(ParserEvent.Error, e);
                    return;
                }
                break;
            }
            case 'text/event-plain': {
                const { error, headers } = Parser.parsePlainBody(body);
                if (error)
                    this.emit(ParserEvent.Error, error);
                data = headers;
                break;
            }
            case 'text/event-xml': {
                const { error, headers } = Parser.parseXmlBody(body);
                if (error)
                    this.emit(ParserEvent.Error, error);
                data = headers;
                break;
            }
        }
        let event;
        if (data)
            event = new Event_1.Event(data);
        else
            event = new Event_1.Event(this._headers, body);
        const reply = event.getHeader(HeaderNames.ReplyText);
        if (reply) {
            if (reply.indexOf('-ERR') === 0)
                event.addHeader('Modesl-Reply-ERR', reply.substring(5));
            else if (reply.indexOf('+OK') === 0)
                event.addHeader('Modesl-Reply-OK', reply.substring(4));
        }
        this.emit(ParserEvent.Event, event, this._headers, body);
    }
}
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map