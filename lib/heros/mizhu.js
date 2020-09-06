(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./../utils/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("./../utils/index");
    var Logic = /** @class */ (function () {
        function Logic() {
        }
        Logic.prototype.calc = function (arr, target) {
            var result = [];
            var val = index_1.chooseCards(arr);
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var item = val_1[_i];
                if (index_1.sum(item[0]) === target) {
                    result.push(item[0]);
                }
                if (index_1.sum(item[1]) === target) {
                    result.push(item[1]);
                }
            }
            return index_1.filterSameItem(result).sort(function (m, n) { return n.length - m.length; });
        };
        return Logic;
    }());
    var Mizhu = /** @class */ (function () {
        function Mizhu() {
        }
        Mizhu.calc = function (arr) {
            return new Logic().calc(arr, 13);
        };
        Mizhu.getLogic = function () { return new Logic(); };
        return Mizhu;
    }());
    exports.Mizhu = Mizhu;
});
