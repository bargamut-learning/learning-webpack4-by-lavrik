let path = require('path');

// Create some object: this will be configuration of Webpack 4
let conf = {
	// Source entry point
	entry: './src/index.js',
	// Output point
	output: {
		// Must be absolute path; may be with __dirname, concatenation or you can use "path" module
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		// Public relative link to output file in browser for dev-server
		publicPath: 'dist/'
	},
	devServer: {
		// Show error compiling in browser
		overlay: true
	},
	module: {
		rules: [
			// Make rule for transpiling js-files bu Babel
			{
				test: /\.js$/,
				loader: 'babel-loader',
				// exclude: '/node_modules/'
			}
		]
	}
};

// It can be a function
module.exports = (env, options) => {
	let isProduction = options.mode === 'production';

	conf.devtool = isProduction ? false : 'eval-sourcemap';

	return conf;
}