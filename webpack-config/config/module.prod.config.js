const moduleConfig= require('./module.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

moduleConfig.rules.push(
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [{
        loader: "css-loader",
        options: {
          minimize: true
        }
      }]
    })
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: "css-loader",
          options: {
            minimize: true
          }
        },
        {
          loader: "sass-loader"
        }
      ]
    })
  }
);

module.exports= moduleConfig;