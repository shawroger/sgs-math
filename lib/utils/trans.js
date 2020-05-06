(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.N_10 = function (val, from) {
        return String(val)
            .split("")
            .map(function (item, index, arr) {
            return Number(item) * Math.pow(from, arr.length - index - 1);
        })
            .reduce(function (prev, curr) { return curr + prev; }, 0);
    };
    exports.n10_N = function (val, to) {
        var result = [];
        val = BigInt(val);
        to = BigInt(to);
        while (true) {
            result.push(val % to);
            val = (val - (val % to)) / to;
            if (val < to) {
                result.push(val % to);
                break;
            }
        }
        return result.reverse().map(function (val) { return Number(val); });
    };
});
