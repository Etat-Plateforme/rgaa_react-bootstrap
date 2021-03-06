var path = require('path');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: [
		'babel-polyfill',
		fullPath('src/index.js')
	],
	output: {
		path: 'dist',
		filename: 'rgaa_react-bootstrap.js',
		library: 'RgaaReactBootstrap',
		libraryTarget: 'umd'
	},
	externals: [
		'react',
		'react-dom',
		'react-bootstrap'
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: fullPath('src')
			}
		]
	}
};
