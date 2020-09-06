module.exports = {
	entry: "src/index.ts",
	output: {
		format: "umd",
		moduleName: "sgsMath",
		fileNames: {
			js: "index.js",
		},
		clean: false
	} 
};
