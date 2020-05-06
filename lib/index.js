(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./encode", "./decode", "./utils/trans"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var encode_1 = require("./encode");
    exports.encode = encode_1.encode;
    var decode_1 = require("./decode");
    exports.decode = decode_1.decode;
    var trans_1 = require("./utils/trans");
    exports.n10_N = trans_1.n10_N;
    exports.N_10 = trans_1.N_10;
});
