(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../utils/trans", "../utils/code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var trans_1 = require("../utils/trans");
    var code_1 = require("../utils/code");
    exports.encode = function (input, format) {
        return encodeURI(input)
            .split("")
            .map(function (item) { var _a, _b; return (_b = (_a = code_1.ALL_CODE.find(function (val) { return val.char === item; })) === null || _a === void 0 ? void 0 : _a.val) !== null && _b !== void 0 ? _b : BigInt(0); })
            .map(function (item) {
            return trans_1.n10_N(item, format.length - 1)
                .map(function (index) { return format[index]; })
                .join("");
        })
            .join(format[format.length - 1]);
    };
});
