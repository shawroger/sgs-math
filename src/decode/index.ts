import { N_10 } from "../utils/trans";
import { ALL_CODE } from "../utils/code";

export const decode = (input: string, format: string | string[]) =>
	decodeURI(
		input
			.split(format[format.length - 1])
			.map((item) => {
				let val = "";
				while (item.length > 0) {
					let error = true;
					for (let i = 0; i < format.length - 1; i++) {
						if (item.startsWith(format[i])) {
							item = item.slice(format[i].length);
							val += i.toString();
							error = false;
							continue;
						}
					}
					if (error) {
						throw new Error("Bad format to be decoded");
					}
				}

				return Number(val);
			})
			.map((val) => N_10(val, format.length - 1))
			.map((val) => ALL_CODE.find((e) => Number(e.val) === val)?.char ?? "")
			.join("")
	);
