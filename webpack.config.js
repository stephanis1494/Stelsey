const path = require('path');

module.exports = {
  //: './src/index.jsx',
  entry: {
    pageOne: './src/index.jsx',
    pageTwo: "./src/contact.jsx"
},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,

      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }
  ]
 }
};
