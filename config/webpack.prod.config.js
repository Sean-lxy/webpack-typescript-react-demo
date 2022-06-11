const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = mer(baseConfig, {
    mode: 'production',
});