const webpack= require('webpack');
const pluginsConfig= require('./plugins.config.js');

pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));

module.exports= pluginsConfig;
