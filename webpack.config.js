const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      },
    ],
  },
};
