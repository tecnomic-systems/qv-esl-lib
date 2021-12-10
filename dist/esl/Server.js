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
exports.Server = exports.ServerEvent = void 0;
const net = __importStar(require("net"));
const uuid = __importStar(require("uuid"));
const eventemitter2_1 = require("eventemitter2");
const Connection_1 = require("./Connection");
var ServerEvent;
(function (ServerEvent) {
    ServerEvent["ConnectionOpen"] = "connection::open";
    ServerEvent["ConnectionReady"] = "connection::ready";
    ServerEvent["ConnectionClose"] = "connection::close";
    ServerEvent["Ready"] = "ready";
})(ServerEvent = exports.ServerEvent || (exports.ServerEvent = {}));
class Server extends eventemitter2_1.EventEmitter2 {
    constructor(opts, readyCb) {
        super({
            wildcard: true,
            delimiter: '::',
            maxListeners: 25,
            ignoreErrors: true,
        });
        this.connections = {};
        if (typeof opts === 'function') {
            readyCb = opts;
            opts = undefined;
        }
        if (readyCb) {
            this.once(ServerEvent.Ready, readyCb);
        }
        this._bindEvents = opts && opts.myevents ? opts.myevents : false;
        if (opts && opts.server) {
            this.server = opts.server;
            process.nextTick(() => this.emit(ServerEvent.Ready));
            this.server.on('connection', this._onConnection.bind(this));
        }
        else {
            const port = opts && opts.port ? opts.port : 8022;
            const host = opts && opts.host ? opts.host : '127.0.0.1';
            this.server = net.createServer(this._onConnection.bind(this));
            this.server.listen(port, host, () => this.emit(ServerEvent.Ready));
        }
    }
    bindEventsEnabled() {
        return this._bindEvents;
    }
    close(callback) {
        this.server.close(callback);
    }
    onConnectionReady() {
        return new Promise(res => {
            this.on(ServerEvent.ConnectionReady, (conn) => res(conn));
        });
    }
    _onConnection(socket) {
        const conn = new Connection_1.Connection(socket, Connection_1.ConnectionType.Outbound);
        const id = uuid.v4();
        this.connections[id] = conn;
        this.emit(ServerEvent.ConnectionOpen, conn, id);
        conn.on(Connection_1.ConnectionEvent.Ready, () => {
            if (this._bindEvents) {
                conn.sendRecv('myevents', () => {
                    this.emit(ServerEvent.ConnectionReady, conn, id);
                });
            }
            else {
                this.emit(ServerEvent.ConnectionReady, conn, id);
            }
        });
        conn.on('esl::end', () => {
            this.emit(ServerEvent.ConnectionClose, conn, id);
            delete this.connections[id];
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map