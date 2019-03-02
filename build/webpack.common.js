const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');




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
    ]
  };
}
