const path = require('path');
// eslint-disable-next-line import/no-unresolved
//const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
  devtool: "source-map",
  entry: slsw.lib.entries,
  target: 'node',
  //externals: [nodeExternals()],
  module: {
    /*rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      }
    ]*/   
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }],      
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
