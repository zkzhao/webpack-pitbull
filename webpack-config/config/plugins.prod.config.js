const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pluginsConfig= require('./plugins.config.js');

pluginsConfig.push(new UglifyJSPlugin({
  compress: {
    warnings: false,
  },
}));

module.exports= pluginsConfig;
