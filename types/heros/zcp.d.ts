declare class Logic {
    /**
     * 数字验证
     * @param val 目标数值
     */
    cardToNum(val: number): number;
    /**
     * 数字转卡牌字符串
     * @param val 目标数字
     */
    numsToCard(val: number): string;
    /**
     * 数组转卡牌字符串
     * @param val 目标数组
     */
    cardsToNums(val: Array<number>): number[];
    /**
     * 获得合法的组合结果
     * @param arr 目标数组
     */
    getCorrectCards(arr: Array<number>): [Array<number>, Array<number>][];
    /**
     * 获得所有的合法的组合结果
     * @param arr 目标数组
     */
    getAllCorrectCards(arr: Array<number>): [Array<number>, Array<number>][];
}
export declare class ZCP {
    static getLogic: () => Logic;
    /**
     * 最终计算结果
     * @param arr 目标数组
     */
    static calc: (arr: number[]) => [number[], number[]][];
    /**
     * 过滤重复结果
     * @param arr 目标数组
     */
    static filter(arr: [Array<number>, Array<number>][]): [Array<number>, Array<number>][];
    /**
     * 将所有结果按数组长度排序
     * @param arr 目标数组
     */
    static sort(arr: [Array<number>, Array<number>][]): [Array<number>, Array<number>][];
}
export {};
