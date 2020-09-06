/**
 * 进行数组求和
 * @param arr 目标数组
 */
export declare const sum: (arr: number[]) => number;
/**
 * 判断数组之和是否相等
 * @param arr1 目标数组1
 * @param arr2 目标数组2
 */
export declare const equal: (arr1: number[], arr2: number[]) => boolean;
/**
 * 判断字符串是不是数字格式
 * @param val 目标字符串
 */
export declare const isNumber: (val: string) => boolean;
/**
 * 生成固定长度的序列
 * @param len 数组长度
 */
export declare const produceOrder: (len: number) => number[];
/**
 * 复制数组
 * @param arr 待复制数组
 */
export declare const copyArr: (arr: number[][]) => number[];
/**
 * 遍历数组的组合形式 （核心代码）
 * @param size 数组长度
 * @param len 组合大小
 */
export declare const ergodic: (size: number, len: number) => number[][];
/**
 * 遍历所有长度的组合
 * @param len 数组长度
 */
export declare const allErgodic: (len: number) => number[][];
/**
 * 摘取数组的组合片段
 * @param arr 目标数组
 */
export declare const chooseCards: (arr: number[]) => [number[], number[]][];
/**
 * 过滤数组的重复元素
 * @param arr 目标数组
 */
export declare function filterSameItem(arr: number[][]): number[][];
