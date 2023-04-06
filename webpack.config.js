const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  entry: {
    ...defaults.entry,
    index: './src/index.js',
    block: './src/blocks/index.js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 