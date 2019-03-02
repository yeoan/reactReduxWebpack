const devConfig = require('./build/webpack.dev.js')
const prodConfig = require('./build/webpack.prod.js')

module.exports = env => {
    let mode = env.mode;
    let isProdEnv = mode == "production" ? true : false;

    if(mode == "development") {
        return devConfig(isProdEnv)
    } else {
        return prodConfig(isProdEnv)
    }
}
