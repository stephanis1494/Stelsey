const path = require('path');

module.exports = {
  //: './src/index.jsx',
  entry: {
    index: './src/index.jsx',
    contact: './src/contact.jsx',
    bio: './src/bio.jsx',
    sportal: './src/sportal.jsx',
    social: './src/social.jsx'
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
