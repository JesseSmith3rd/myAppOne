import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', //necessary for hot re-loading with IE
    'webpack-hot-middleware/client?reload-true',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + 'dist', //physical files are only output to production
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugins()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', eslint]
    ]
  }
}
