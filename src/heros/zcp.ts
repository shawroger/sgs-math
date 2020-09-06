import { chooseCards } from "./../utils/index";
import { equal, isNumber } from "../utils";

class Logic {
	/**
	 * 数字验证
	 * @param val 目标数值
	 */
	cardToNum(val: number): number {
		const vaildChars = {
			J: 11,
			Q: 12,
			K: 13,
			j: 11,
			q: 12,
			k: 13,
		};

		if (isNumber(val.toString())) {
			return Number(val);
		} else if (Object.keys(vaildChars).includes(val.toString())) {
			let returns: number = 0;
			for (let i in Object.keys(vaildChars)) {
				if (Object.keys(vaildChars)[i] === val.toString()) {
					returns = Object.values(vaildChars)[i];
					break;
				}
			}
			return returns;
		} else {
			return -1;
		}
	}

	/**
	 * 数字转卡牌字符串
	 * @param val 目标数字
	 */
	numsToCard(val: number) {
		const strArr = [
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
	}

	/**
	 * 数组转卡牌字符串
	 * @param val 目标数组
	 */
	cardsToNums(val: Array<number>): number[] {
		return val.map((e) => this.cardToNum(e));
	}

	/**
	 * 获得合法的组合结果
	 * @param arr 目标数组
	 */
	getCorrectCards(arr: Array<number>): [Array<number>, Array<number>][] {
		const result: [Array<number>, Array<number>][] = [];
		const allParts = chooseCards(arr);
		allParts.forEach((e) => {
			if (equal(this.cardsToNums(e[0]), this.cardsToNums(e[1]))) {
				result.push(e);
			}
		});
		return result;
	}

	/**
	 * 获得所有的合法的组合结果
	 * @param arr 目标数组
	 */
	getAllCorrectCards(arr: Array<number>): [Array<number>, Array<number>][] {
		const result = this.getCorrectCards(arr);
		const allParts = chooseCards(arr);
		allParts.forEach((e) => {
			this.getCorrectCards(e[0]).forEach((v) => {
				result.push(v);
			});
			this.getCorrectCards(e[1]).forEach((v) => {
				result.push(v);
			});
		});
		return result;
	}

	/**
	 * 最终计算结果
	 * @param arr 目标数组
	 */
}

export class ZCP {
	static getLogic = () => new Logic();

	/**
	 * 最终计算结果
	 * @param arr 目标数组
	 */
	static calc = (arr: Array<number>) =>
		ZCP.sort(ZCP.filter(ZCP.getLogic().getAllCorrectCards(arr)));

	/**
	 * 过滤重复结果
	 * @param arr 目标数组
	 */
	static filter(
		arr: [Array<number>, Array<number>][]
	): [Array<number>, Array<number>][] {
		const isEqual = (m: Array<number>, n: Array<number>): boolean => {
			if (m.length !== n.length) return false;
			const M = m.sort();
			const N = n.sort();

			let result = true;
			M.forEach((v, k) => {
				if (v !== N[k]) {
					result = false;
				}
			});
			return result;
		};

		const itemsIsEqual = (
			m: [Array<number>, Array<number>],
			n: [Array<number>, Array<number>]
		): boolean => {
			if (isEqual(m[0], n[0]) && isEqual(m[1], n[1])) return true;
			if (isEqual(m[0], n[1]) && isEqual(m[1], n[0])) return true;
			return false;
		};

		const arrHasItem = (
			m: [Array<number>, Array<number>],
			n: [Array<number>, Array<number>][]
		): boolean => {
			let result = false;
			n.forEach((v) => {
				if (itemsIsEqual(v, m)) {
					result = true;
				}
			});
			return result;
		};

		const newArr: typeof arr = [];
		arr.forEach((v) => {
			if (!arrHasItem(v, newArr)) {
				newArr.push(v);
			}
		});

		return newArr;
	}

	/**
	 * 将所有结果按数组长度排序
	 * @param arr 目标数组
	 */
	static sort(
		arr: [Array<number>, Array<number>][]
	): [Array<number>, Array<number>][] {
		const sortByLength = (
			m: [Array<number>, Array<number>],
			n: [Array<number>, Array<number>]
		) => {
			return n[0].length + n[1].length - m[0].length - m[1].length;
		};

		const sortByFirstLength = (
			m: [Array<number>, Array<number>],
			n: [Array<number>, Array<number>]
		) => {
			return n[0].length - m[0].length;
		};
		return arr.sort(sortByFirstLength).sort(sortByLength);
	}
}
