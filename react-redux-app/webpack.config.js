const path = require('path');
module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react','@babel/preset-env',{
                  'plugins': ['@babel/plugin-proposal-class-properties',"@babel/plugin-transform-runtime"]}]
              }
            }
          }
        ]
      },
      devServer: {
        contentBase: './dist',
       hot: true,
      }
     
  };