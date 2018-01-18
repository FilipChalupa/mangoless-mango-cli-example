const path = require('path')

module.exports = {
	entry: './src/templates/index-webpack.pug',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [ 'script-loader' ],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.pug$/,
				use: [
					{ loader: 'file-loader?name=[name].html' },
					{ loader: 'extract-loader' },
					{
						loader: 'html-loader',
						options: {
							attrs: [
								'img:src',
								'link:href',
								'script:src',
							],
						},
					},
					{ loader: 'pug-html-loader' },
				]
			},
		],
	},
}
