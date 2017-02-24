module.exports = {
	entry: './src/index.js',
	output: {
		filename: './dist/index.js',
		sourceMapFilename: './dist/index.js.map',
    libraryTarget: 'umd'
	},
	externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.svg$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}