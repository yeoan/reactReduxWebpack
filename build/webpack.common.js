const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      path:path.join(__dirname,'../dist'),
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
         vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          }
       }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new UglifyJsPlugin(),
      new Dotenv(),
      new CopyWebpackPlugin([ { from: './src/assets', to: 'assets' } ])
    ]
  };
}
