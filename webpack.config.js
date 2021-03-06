var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './src/js/app.js',
 output: { 
     path: __dirname + "/src/", 
     filename: 'bundle.js' 
    },
 watch: true,
 module: {
  loaders: [
   {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node-modules/,
    query: {
     presets: ['es2015', 'react'],
     plugins: ['react-html-attrs']
    }
   }
  ]
 },
};