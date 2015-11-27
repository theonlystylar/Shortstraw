var webpack = require("webpack");
var path = require("path");

module.exports = {
	watch: true,
	context: "Scripts",
	entry: {
		main: "./Src/Main/main.js",
		admin: "./Src/Admin/admin.js"
		//vendor: ["./Libs/jquery.js"]
	},
	output: {
		filename: "Scripts/Built/[name]_bundle.js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("common", "Scripts/Built/common.js")
	],
	resolve: {
		root: path.join(__dirname, "Scripts"),
		alias: {
			jquery: "Libs/jquery.js"
		}
	}
}

//module.exports = {
//	context: "Scripts/Src/",
//	entry: {
//		main: "./Main/main.js",
//		admin: "./Admin/admin.js"
//	},
//	output: {
//		filename: "Scripts/Built/[name]_bundle.js"
//	}
//}