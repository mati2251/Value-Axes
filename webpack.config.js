const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/',
	module: {
		rules: [
			{
				test: [/\.tsx?$/, /\.s[ac]ss$/i],
				use: ['ts-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public'),
	},
	plugins: [
		new CopyPlugin({
				patterns: [
					{
						from: 'src/**/*.html',
						to: "",
						context: "public/"
					}
				]
			}
		)
	]
};
