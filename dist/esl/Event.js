"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const utils_1 = require("../utils");
const Parser_1 = require("./Parser");
class Event {
    constructor(typeOrHeaders, subclassOrBody) {
        this._headerIndex = -1;
        this._headers = {};
        if (typeof typeOrHeaders === 'string') {
            this._type = typeOrHeaders;
            this._subclass = subclassOrBody || '';
            this._body = '';
            this.addHeader(Parser_1.HeaderNames.EventName, this._type);
            if (this._subclass)
                this.addHeader(Parser_1.HeaderNames.EventSubclass, this._subclass);
        }
        else {
            this._type = typeOrHeaders[Parser_1.HeaderNames.EventName] || '';
            this._subclass = typeOrHeaders[Parser_1.HeaderNames.EventSubclass] || '';
            this._body = subclassOrBody || typeOrHeaders._body || '';
            this._headers = typeOrHeaders;
            delete this._headers._body;
        }
        this.delHeader('Content-Length');
    }
    get headers() {
        return this._headers;
    }
    get type() {
        return this._type;
    }
    get body() {
        return this._body;
    }
    serialize(format = 'json') {
        switch (format) {
            case 'json': {
                const obj = Object.assign({}, this._headers);
                if (this._body) {
                    obj[Parser_1.HeaderNames.ContentLength] = Buffer.byteLength(this._body, 'utf8').toString();
                    obj._body = this._body;
                }
                else {
                    delete obj[Parser_1.HeaderNames.ContentLength];
                }
                return JSON.stringify(obj, null, 4);
            }
            case 'plain': {
                let output = '';
                const keys = Object.keys(this._headers);
                for (let i = 0; i < keys.length; ++i) {
                    const key = keys[i];
                    if (key === 'Content-Length')
                        continue;
                    const value = this._headers[key];
                    output += `${key}: ${value}\n`;
                }
                if (this._body) {
                    const bodyLen = Buffer.byteLength(this._body, 'utf8');
                    output += `${Parser_1.HeaderNames.ContentLength}: ${bodyLen}\n\n`;
                    output += this._body;
                }
                return output;
            }
            case 'xml': {
                let output = '';
                const keys = Object.keys(this._headers);
                output += '<event>\n';
                output += '    <headers>\n';
                for (let i = 0; i < keys.length; ++i) {
                    const key = keys[i];
                    if (key === 'Content-Length')
                        continue;
                    const value = this._headers[key];
                    const encodedValue = typeof value === 'string' ? (0, utils_1.encodeXml)(value) : value;
                    output += `        <${key}>${encodedValue}</${key}>\n`;
                }
                if (this._body) {
                    const xmlEncodedBody = (0, utils_1.encodeXml)(this._body);
                    const key = Parser_1.HeaderNames.ContentLength;
                    const value = Buffer.byteLength(xmlEncodedBody, 'utf8');
                    output += `        <${key}>${value}</${key}>\n`;
                    output += '    </headers>\n';
                    output += `    <body>${xmlEncodedBody}</body>\n`;
                }
                else {
                    output += '    </headers>\n';
                }
                output += '</event>';
                return output;
            }
        }
        return '';
    }
    setPriority(priority) {
        this.addHeader('priority', priority.toString());
    }
    getHeader(name) {
        return this._headers[name] || null;
    }
    getBody() {
        return this._body;
    }
    getType() {
        return this._type;
    }
    addBody(value) {
        return this._body += value;
    }
    addHeader(name, value) {
        this._headers[name] = value;
    }
    delHeader(name) {
        delete this._headers[name];
    }
    firstHeader() {
        this._headerIndex = 0;
        const keys = Object.keys(this._headers);
        if (keys.length === 0)
            return null;
        return keys[0];
    }
    nextHeader() {
        if (this._headerIndex === -1)
            return null;
        const keys = Object.keys(this._headers);
        if (this._headerIndex === (keys.length - 1)) {
            this._headerIndex = -1;
            return null;
        }
        ++this._headerIndex;
        return keys[this._headerIndex];
    }
}
exports.Event = Event;
//# sourceMappingURL=Event.js.map