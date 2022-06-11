const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)?$/,
                use: 'label-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/images/[hash][ext][query]',
                },
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[hash][ext][query]',
                },
              },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
    ]
};