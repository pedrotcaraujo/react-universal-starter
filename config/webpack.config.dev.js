const paths = require('./paths');

module.exports = {
	devtool: "source-map",

	entry: paths.appClient,
	output: {
		path: paths.appStatics,
		filename: "app.bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"

			}
		]
	}
}