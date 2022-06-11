const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    cache: {
        type: "memory"
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    }
});