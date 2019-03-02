const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = env =>{
  return merge(common(env), {
   mode: 'production',
   devtool: 'source-map',
   plugins: [
     new webpack.DefinePlugin({
       'SERVICE_URL': JSON.stringify('https://smeeting.walsin.com/backend'),
       'AUDIO_URL': JSON.stringify('https://smeeting-audio.walsin.com'),
       'CAS_SECURITY_CHECK': JSON.stringify('https://cas.walsin.com:8889/cas/login'),
     })
   ]
  });
}
