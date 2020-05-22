const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.ts',
		'create/create': './src/create/Create.ts'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				loader: 'babel-loader',
				options: {
					presets: [
						'babel-preset-env'
					]
				}
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		path: path.resolve(__dirname, `public/`),
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 9000
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					context: './src',
					from: '**/*.html',
				},
			],
		})
	],
};
