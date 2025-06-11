const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ExcalidrawApp.jsx',
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist'),
        filename: 'excalidraw.bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            'roughjs': path.resolve(__dirname, 'node_modules/roughjs'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ],
};
