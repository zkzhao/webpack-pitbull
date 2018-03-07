const moduleConfig= require('./module.config.js');

moduleConfig.rules.push(
  {
    test: /\.css$/,
    use: ['style-loader','css-loader']
  },
  {
    test: /\.scss$/,
    use: ['style-loader','css-loader','sass-loader']
  }
);

module.exports= moduleConfig;