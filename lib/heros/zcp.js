(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./../utils/index", "../utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("./../utils/index");
    var utils_1 = require("../utils");
    var Logic = /** @class */ (function () {
        function Logic() {
        }
        /**
         * 数字验证
         * @param val 目标数值
         */
        Logic.prototype.cardToNum = function (val) {
            var vaildChars = {
                J: 11,
                Q: 12,
                K: 13,
                j: 11,
                q: 12,
                k: 13,
            };
            if (utils_1.isNumber(val.toString())) {
                return Number(val);
            }
            else if (Object.keys(vaildChars).includes(val.toString())) {
                var returns = 0;
                for (var i in Object.keys(vaildChars)) {
                    if (Object.keys(vaildChars)[i] === val.toString()) {
                        returns = Object.values(vaildChars)[i];
                        break;
                    }
                }
                return returns;
            }
            else {
                return -1;
            }
        };
        /**
         * 数字转卡牌字符串
         * @param val 目标数字
         */
        Logic.prototype.numsToCard = function (val) {
            var strArr = [
                "A",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "J",
                "Q",
                "K",
            ];
            return strArr[val - 1];
        };
        /**
         * 数组转卡牌字符串
         * @param val 目标数组
         */
        Logic.prototype.cardsToNums = function (val) {
            var _this = this;
            return val.map(function (e) { return _this.cardToNum(e); });
        };
        /**
         * 获得合法的组合结果
         * @param arr 目标数组
         */
        Logic.prototype.getCorrectCards = function (arr) {
            var _this = this;
            var result = [];
            var allParts = index_1.chooseCards(arr);
            allParts.forEach(function (e) {
                if (utils_1.equal(_this.cardsToNums(e[0]), _this.cardsToNums(e[1]))) {
                    result.push(e);
                }
            });
            return result;
        };
        /**
         * 获得所有的合法的组合结果
         * @param arr 目标数组
         */
        Logic.prototype.getAllCorrectCards = function (arr) {
            var _this = this;
            var result = this.getCorrectCards(arr);
            var allParts = index_1.chooseCards(arr);
            allParts.forEach(function (e) {
                _this.getCorrectCards(e[0]).forEach(function (v) {
                    result.push(v);
                });
                _this.getCorrectCards(e[1]).forEach(function (v) {
                    result.push(v);
                });
            });
            return result;
        };
        return Logic;
    }());
    var ZCP = /** @class */ (function () {
        function ZCP() {
        }
        /**
         * 过滤重复结果
         * @param arr 目标数组
         */
        ZCP.filter = function (arr) {
            var isEqual = function (m, n) {
                if (m.length !== n.length)
                    return false;
                var M = m.sort();
                var N = n.sort();
                var result = true;
                M.forEach(function (v, k) {
                    if (v !== N[k]) {
                        result = false;
                    }
                });
                return result;
            };
            var itemsIsEqual = function (m, n) {
                if (isEqual(m[0], n[0]) && isEqual(m[1], n[1]))
                    return true;
                if (isEqual(m[0], n[1]) && isEqual(m[1], n[0]))
                    return true;
                return false;
            };
            var arrHasItem = function (m, n) {
                var result = false;
                n.forEach(function (v) {
                    if (itemsIsEqual(v, m)) {
                        result = true;
                    }
                });
                return result;
            };
            var newArr = [];
            arr.forEach(function (v) {
                if (!arrHasItem(v, newArr)) {
                    newArr.push(v);
                }
            });
            return newArr;
        };
        /**
         * 将所有结果按数组长度排序
         * @param arr 目标数组
         */
        ZCP.sort = function (arr) {
            var sortByLength = function (m, n) {
                return n[0].length + n[1].length - m[0].length - m[1].length;
            };
            var sortByFirstLength = function (m, n) {
                return n[0].length - m[0].length;
            };
            return arr.sort(sortByFirstLength).sort(sortByLength);
        };
        ZCP.getLogic = function () { return new Logic(); };
        /**
         * 最终计算结果
         * @param arr 目标数组
         */
        ZCP.calc = function (arr) {
            return ZCP.sort(ZCP.filter(ZCP.getLogic().getAllCorrectCards(arr)));
        };
        return ZCP;
    }());
    exports.ZCP = ZCP;
});
