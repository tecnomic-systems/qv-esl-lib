"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslSetLogLevel = exports.setLogLevel = exports.PLAYBACK_TERMINATOR_NONE = exports.PLAYBACK_TERMINATOR_ALL = exports.ChannelHeaders = exports.EslEvents = exports.Server = exports.Parser = exports.Event = exports.Connection = void 0;
var Connection_1 = require("./esl/Connection");
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return Connection_1.Connection; } });
var Event_1 = require("./esl/Event");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return Event_1.Event; } });
var Parser_1 = require("./esl/Parser");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_1.Parser; } });
var Server_1 = require("./esl/Server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return Server_1.Server; } });
var esl_events_1 = require("./interfaces/esl-events");
Object.defineProperty(exports, "EslEvents", { enumerable: true, get: function () { return esl_events_1.EslEvents; } });
var esl_headers_1 = require("./interfaces/esl-headers");
Object.defineProperty(exports, "ChannelHeaders", { enumerable: true, get: function () { return esl_headers_1.ChannelHeaders; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "PLAYBACK_TERMINATOR_ALL", { enumerable: true, get: function () { return constants_1.PLAYBACK_TERMINATOR_ALL; } });
Object.defineProperty(exports, "PLAYBACK_TERMINATOR_NONE", { enumerable: true, get: function () { return constants_1.PLAYBACK_TERMINATOR_NONE; } });
const logger_1 = require("./logger");
function setLogLevel(level) {
    logger_1.logger.setLogLevel(level);
}
exports.setLogLevel = setLogLevel;
exports.eslSetLogLevel = setLogLevel;
//# sourceMappingURL=index.js.map