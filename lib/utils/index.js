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
    /**
     * 进行数组求和
     * @param arr 目标数组
     */
    exports.sum = function (arr) {
        return arr.reduce(function (total, currentValue) { return total + currentValue; }, 0);
    };
    /**
     * 判断数组之和是否相等
     * @param arr1 目标数组1
     * @param arr2 目标数组2
     */
    exports.equal = function (arr1, arr2) {
        return exports.sum(arr1) === exports.sum(arr2);
    };
    /**
     * 判断字符串是不是数字格式
     * @param val 目标字符串
     */
    exports.isNumber = function (val) { return /^\d+$/.test(val); };
    /**
     * 生成固定长度的序列
     * @param len 数组长度
     */
    exports.produceOrder = function (len) {
        return Array(len)
            .fill(0)
            .map(function (_v, i) { return i; });
    };
    /**
     * 复制数组
     * @param arr 待复制数组
     */
    exports.copyArr = function (arr) {
        var result = [];
        arr.forEach(function (e) {
            e.forEach(function (v) {
                result.push(v);
            });
        });
        return result;
    };
    /**
     * 遍历数组的组合形式 （核心代码）
     * @param size 数组长度
     * @param len 组合大小
     */
    exports.ergodic = function (size, len) {
        var arr = exports.produceOrder(len);
        var cards = [];
        (function $(arr, size, result) {
            if (size > arr.length) {
                return;
            }
            else if (size === arr.length) {
                cards.push(exports.copyArr([result, arr]));
            }
            else {
                for (var i = 0; i < arr.length; i++) {
                    var temp = exports.copyArr([result]);
                    temp.push(arr[i]);
                    if (size === 1) {
                        cards.push(temp);
                    }
                    else {
                        var tempArr = exports.copyArr([arr]);
                        tempArr.splice(0, i + 1);
                        $(tempArr, size - 1, temp);
                    }
                }
            }
        })(arr, size, []);
        return cards;
    };
    /**
     * 遍历所有长度的组合
     * @param len 数组长度
     */
    exports.allErgodic = function (len) {
        var result = [];
        for (var i = 1; i <= Math.floor(0.5 * len); i++) {
            exports.ergodic(i, len).forEach(function (e) {
                result.push(e);
            });
        }
        return result;
    };
    /**
     * 摘取数组的组合片段
     * @param arr 目标数组
     */
    exports.chooseCards = function (arr) {
        var result = [];
        var allVals = Array(arr.length)
            .fill(0)
            .map(function (_v, i) { return i; });
        exports.allErgodic(arr.length).forEach(function (e) {
            var temp1 = [];
            var temp2 = [];
            e.forEach(function (v) {
                temp1.push(arr[v]);
            });
            allVals.forEach(function (v) {
                if (!e.includes(v)) {
                    temp2.push(arr[v]);
                }
            });
            result.push([temp1, temp2]);
        });
        return result;
    };
    /**
     * 过滤数组的重复元素
     * @param arr 目标数组
     */
    function filterSameItem(arr) {
        var result = [];
        var filterFlags = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            var flag = item.sort().toString();
            if (!filterFlags.includes(flag)) {
                filterFlags.push(flag);
                result.push(item);
            }
        }
        return result;
    }
    exports.filterSameItem = filterSameItem;
});
