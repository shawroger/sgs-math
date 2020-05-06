export const N_10 = (val: number | bigint, from: number) =>
	String(val)
		.split("")
		.map(
			(item, index, arr) =>
				Number(item) * Math.pow(from, arr.length - index - 1)
		)
		.reduce((prev, curr) => curr + prev, 0);

export const n10_N = (val: number | bigint, to: number | bigint) => {
    
    const result: bigint[] = [];
    val = BigInt(val);
    to = BigInt(to);

	while (true) {
		result.push(val % to);
        val = (val - (val % to)) / to;
        if(val < to) {
            result.push(val % to);
            break;
        }
	}
	return result.reverse().map(val => Number(val));
};

