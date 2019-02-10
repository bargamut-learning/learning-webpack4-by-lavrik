// Create some object: this will be configuration of Webpack 4
let conf = {
	// Source entry point
	entry: './src/index.js',
	// Output point
	output: {
		path: './dist/',
		filename: 'main.js'
	}
};

module.exports = conf;