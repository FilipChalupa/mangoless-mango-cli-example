const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					"file-loader?name=[name].html",
					"extract-loader",
					"html-loader",
					"pug-html-loader"
				]
			},
		],
	},
}
