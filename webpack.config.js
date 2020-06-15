const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.ts',
		'create/create': './src/create/Create.ts'
	},
	mode: "production",
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
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		path: path.resolve(__dirname, `docs/`),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					context: './src',
					from: '**/*.html',
				},
				{
					context: './src',
					from: '**/*.png'
				},
				{
					context: './src',
					from: '**/*.svg'
				}
			],
		})
	],
};
