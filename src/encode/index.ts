import { n10_N } from "../utils/trans";
import { ALL_CODE } from "../utils/code";

export const encode = (input: string, format: string | string[]) =>
	encodeURI(input)
		.split("")
		.map((item) => ALL_CODE.find((val) => val.char === item)?.val ?? BigInt(0))
		.map((item) =>
			n10_N(item, format.length - 1)
				.map((index) => format[index])
				.join("")
		)
		.join(format[format.length - 1]);
