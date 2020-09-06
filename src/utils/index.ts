/**
 * 进行数组求和
 * @param arr 目标数组
 */
export const sum = (arr: number[]) =>
	arr.reduce((total, currentValue) => total + currentValue, 0);

/**
 * 判断数组之和是否相等
 * @param arr1 目标数组1
 * @param arr2 目标数组2
 */
export const equal = (arr1: number[], arr2: number[]) =>
	sum(arr1) === sum(arr2);

/**
 * 判断字符串是不是数字格式
 * @param val 目标字符串
 */
export const isNumber = (val: string) => /^\d+$/.test(val);

/**
 * 生成固定长度的序列
 * @param len 数组长度
 */
export const produceOrder = (len: number) =>
	Array(len)
		.fill(0)
		.map((_v, i) => i);

/**
 * 复制数组
 * @param arr 待复制数组
 */
export const copyArr = (arr: Array<number[]>): number[] => {
	const result: number[] = [];
	arr.forEach((e) => {
		e.forEach((v) => {
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
export const ergodic = (size: number, len: number) => {
	const arr = produceOrder(len);
	const cards: Array<number[]> = [];

	(function $(arr: number[], size: number, result: number[]) {
		if (size > arr.length) {
			return;
		} else if (size === arr.length) {
			cards.push(copyArr([result, arr]));
		} else {
			for (let i = 0; i < arr.length; i++) {
				const temp = copyArr([result]);
				temp.push(arr[i]);
				if (size === 1) {
					cards.push(temp);
				} else {
					const tempArr = copyArr([arr]);
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
export const allErgodic = (len: number) => {
	const result: Array<number[]> = [];
	for (let i = 1; i <= Math.floor(0.5 * len); i++) {
		ergodic(i, len).forEach((e) => {
			result.push(e);
		});
	}
	return result;
};

/**
 * 摘取数组的组合片段
 * @param arr 目标数组
 */
export const chooseCards = (
	arr: Array<number>
): [Array<number>, Array<number>][] => {
	const result: [Array<number>, Array<number>][] = [];
	const allVals = Array(arr.length)
		.fill(0)
		.map((_v, i) => i);
	allErgodic(arr.length).forEach((e) => {
		const temp1: Array<number> = [];
		const temp2: Array<number> = [];
		e.forEach((v) => {
			temp1.push(arr[v]);
		});
		allVals.forEach((v) => {
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
export function filterSameItem(arr: number[][]) {
	const result: number[][] = [];
	const filterFlags: string[] = [];

	for (let item of arr) {
		const flag = item.sort().toString();
		if (!filterFlags.includes(flag)) {
			filterFlags.push(flag);
			result.push(item);
		}
	}

	return result;
}
