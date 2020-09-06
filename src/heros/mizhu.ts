import { sum, chooseCards, filterSameItem } from "./../utils/index";

class Logic {
	calc(arr: number[], target: number) {
		const result: number[][] = [];
		const val = chooseCards(arr);
		for (let item of val) {
			if (sum(item[0]) === target) {
				result.push(item[0]);
			}

			if (sum(item[1]) === target) {
				result.push(item[1]);
			}
		}

		return filterSameItem(result).sort(
			(m: Array<number>, n: Array<number>) => n.length - m.length
		);
	}
}

export class Mizhu {

    static getLogic = () => new Logic();

    
	static calc(arr: number[]) {
		return new Logic().calc(arr, 13);
	}
}
