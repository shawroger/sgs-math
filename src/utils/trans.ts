export const N_10 = (val: number | bigint, from: number) =>
	String(val)
		.split("")
		.map(
			(item, index, arr) =>
				Number(item) * Math.pow(from, arr.length - index - 1)
		)
		.reduce((prev, curr) => curr + prev, 0);

export const n10_N = (val: number | bigint, to: number | bigint) => {
	to = BigInt(to);
	val = BigInt(val);
	const result: bigint[] = [];

	while (true) {
		result.push(val % to);
		val = (val - (val % to)) / to;
		if (val < to) {
			result.push(val % to);
			break;
		}
	}

	for (let i = result.length - 1; i >= 0; i--) {
		if (Number(result[i]) === 0) {
			result.pop();
			continue;
		} else {
			break;
		}
	}
	return result.reverse().map((val) => Number(val));
};
