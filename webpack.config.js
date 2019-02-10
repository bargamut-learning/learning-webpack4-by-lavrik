let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(process.env.NODE_ENV);


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
			},
			{
        test: /\.css$/,
        use: [
					{
						// This plugin should be used only on production builds
						// without style-loader in the loaders chain, especially
						// if you want to have HMR in development.
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					"css-loader"
				]
      }
		]
	},
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
      chunkFilename: "[id].css"
    })
  ]
};

// It can be a function
module.exports = (env, options) => {
	let isProduction = options.mode === 'production';

	conf.devtool = isProduction ? false : 'eval-sourcemap';

	return conf;
}