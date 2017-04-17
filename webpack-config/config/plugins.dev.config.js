const webpack= require('webpack');
const dirPath= require('./dir.path.js');
var pluginsConfig= require('./plugins.config.js')

pluginsConfig.push(new webpack.DefinePlugin({
  'IS_PRODUCTION': false,
  'SERVICE_URL': JSON.stringify("http://localhost")
}));

module.exports= pluginsConfig;
