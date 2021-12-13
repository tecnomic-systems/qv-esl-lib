"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.QvLogLevel = void 0;
class Logger {
    constructor() {
        this._logFunc = console.log;
        this._enabled = false;
        this._level = 0;
    }
    get enabled() {
        return this._enabled;
    }
    get level() {
        return this._level;
    }
    setLogFunction(logFunc) {
        this._logFunc = logFunc;
    }
    setLogLevel(level) {
        this._enabled = true;
        this._level = level;
        return this._level;
    }
    log(event) {
        const logLevelStr = event.getHeader('Log-Level') || '7';
        const logLevel = parseInt(logLevelStr, 10);
        if (!this._enabled || logLevel > this._level)
            return;
        let msg = '';
        if (this._level === 7) {
            msg += event.serialize();
            msg += '\n\n';
        }
        msg += event.getBody();
        this._logFunc(msg);
    }
}
var QvLogLevel;
(function (QvLogLevel) {
    QvLogLevel["CONSOLE"] = "CONSOLE";
    QvLogLevel["ALERT"] = "ALERT";
    QvLogLevel["CRIT"] = "CRIT";
    QvLogLevel["ERR"] = "ERR";
    QvLogLevel["WARNING"] = "WARNING";
    QvLogLevel["NOTICE"] = "NOTICE";
    QvLogLevel["INFO"] = "INFO";
    QvLogLevel["DEBUG"] = "DEBUG";
})(QvLogLevel = exports.QvLogLevel || (exports.QvLogLevel = {}));
exports.logger = new Logger();
//# sourceMappingURL=logger.js.map