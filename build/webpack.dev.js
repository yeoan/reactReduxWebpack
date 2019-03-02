const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
     historyApiFallback: true,
     disableHostCheck: true,
   },
   plugins: [
     new webpack.DefinePlugin({
       'SERVICE_URL': JSON.stringify('http://ur07456.walsin.com/backend'),
       'AUDIO_URL': JSON.stringify('http://127.0.0.1:3000'),
       'CAS_SECURITY_CHECK': JSON.stringify('http://appdev.walsin.com:8888/cas/login'),
     })
   ]
 });
}
