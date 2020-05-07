const { n10_N, N_10, decode, encode } = Diycode;

describe("进制转换测试", function () {
	it("十进制转任意进制测试", function () {
		expect(n10_N(1, 2)).toEqual([1]);
		expect(n10_N(1, 3)).toEqual([1]);
		expect(n10_N(1, 10)).toEqual([1]);
		expect(n10_N(1, 16)).toEqual([1]);
		expect(n10_N(1, 20)).toEqual([1]);
		expect(n10_N(1, 50)).toEqual([1]);
		expect(n10_N(10, 2)).toEqual([1, 0, 1, 0]);
		expect(n10_N(100, 2)).toEqual([1, 1, 0, 0, 1, 0, 0]);
	});

	it("任意进制转十进制测试", function () {
		expect(N_10(1, 2)).toEqual(1);
		expect(N_10(1, 3)).toEqual(1);
		expect(N_10(1, 10)).toEqual(1);
		expect(N_10(1, 16)).toEqual(1);
		expect(N_10(1, 20)).toEqual(1);
		expect(N_10(1, 50)).toEqual(1);
		expect(N_10(1111, 2)).toEqual(15);
		expect(N_10(15632, 16)).toEqual(87602);
	});

	it("字符串编码译码测试", function () {
		const Format = "QWERTYUIOP";
		Array(20)
			.fill(String(Math.random() * Date.now()))
			.forEach((v) => expect(decode(encode(v, Format), Format)).toEqual(v));
	});
});
