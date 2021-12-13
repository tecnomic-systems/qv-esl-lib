"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFormat = exports.VALID_FORMATS = exports.encodeXml = void 0;
function encodeXml(str) {
    if (!str)
        return '';
    return str.replace(/([&"<>\'])/g, function (str, item) {
        switch (item) {
            case '>':
                return '&gt;';
            case '<':
                return '&lt;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
            default:
                return '';
        }
    });
}
exports.encodeXml = encodeXml;
exports.VALID_FORMATS = ['plain', 'xml', 'json'];
function isValidFormat(format) {
    return exports.VALID_FORMATS.indexOf(format) !== -1;
}
exports.isValidFormat = isValidFormat;
//# sourceMappingURL=utils.js.map