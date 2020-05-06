export const ALL_CODE = "%;,/?:@&=+$-_.!~*'()#0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnnm"
	.split("")
	.map((item, index) => ({ val: BigInt(index), char: item }));
