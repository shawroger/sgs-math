(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./zcp", "./mizhu"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var zcp_1 = require("./zcp");
    exports.ZCP = zcp_1.ZCP;
    var mizhu_1 = require("./mizhu");
    exports.Mizhu = mizhu_1.Mizhu;
});
