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
    exports.decode = function (input, format) {
        return decodeURI(input
            .split(format[format.length - 1])
            .map(function (item) {
            var val = "";
            while (item.length > 0) {
                var error = true;
                for (var i = 0; i < format.length - 1; i++) {
                    if (item.startsWith(format[i])) {
                        item = item.slice(format[i].length);
                        val += i.toString();
                        error = false;
                        continue;
                    }
                }
                if (error) {
                    throw new Error("Bad format to be decoded");
                }
            }
            return Number(val);
        })
            .map(function (val) { return trans_1.N_10(val, format.length - 1); })
            .map(function (val) { var _a, _b; return (_b = (_a = code_1.ALL_CODE.find(function (e) { return Number(e.val) === val; })) === null || _a === void 0 ? void 0 : _a.char) !== null && _b !== void 0 ? _b : ""; })
            .join(""));
    };
});
