export const ALL_CODE = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.?!:;+-*/^@0123456789%<>#$&=_|()"
	.split("")
	.map((item, index) => ({ val: BigInt(index), char: item }));
