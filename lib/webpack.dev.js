const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only', // webpack日志只在发生错误时输出
  },
  mode: 'development',
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig);
