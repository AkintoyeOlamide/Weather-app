const Htmlwebpackplugin = require('html-webpack-plugin');
const Minicss = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          esModule: false,
        },
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      }],
    },
    ],

  },
  plugins: [
    new Htmlwebpackplugin({
      template: './src/index.html',
    }),
    new Minicss({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};