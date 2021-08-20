const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  entry: {
    dashboard: './src/dashboard/index.js',
    profile: './src/profile/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
};
