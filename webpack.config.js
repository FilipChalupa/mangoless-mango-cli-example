const path = require('path')

module.exports = {
	entry: [
		'./src/scripts/index.js',
		'./src/templates/index.pug',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp|svg)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash].css',
						},
					},
					'sass-loader',
				],
			},
			{
				test: /manifest\.json$/,
				use: [ 'file-loader' ],
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
							interpolate: 'require',
						},
					},
					{ loader: 'pug-html-loader' },
				]
			},
		],
	},
}
