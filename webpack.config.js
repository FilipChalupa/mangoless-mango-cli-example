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
				test: /\.(png|jpe?g|gif|webp|js)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
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
