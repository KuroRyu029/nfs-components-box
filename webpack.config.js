const path = require('path')

const publicPath = '/'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/index.js',
    sourceMapFilename: './dist/index.js.map',
    publicPath: publicPath,
    libraryTarget: 'umd',
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  }],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.svg$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/,
        loader: ['style', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.svg/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff2/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.eot/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
      },
    ],
  },
}
