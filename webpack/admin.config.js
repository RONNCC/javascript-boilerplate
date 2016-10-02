import HtmlWebpackPlugin from 'html-webpack-plugin';
import loaders from './loaders';
import { definePlugin, extractTextPlugin } from './plugins';

export default {
    cache: true,
    entry: {
        index: [
            `${__dirname}/../src/admin/js/main.js`,
        ],
    },
    module: {
        loaders: loaders('admin'),
    },
    output: {
        filename: 'admin/[name].js',
        path: `${__dirname}/../build`,
        publicPath: '/',
    },
    plugins: [
        definePlugin(),
        extractTextPlugin('admin'),
        new HtmlWebpackPlugin({
            filename: 'admin/index.html',
            template: `${__dirname}/../src/admin/index.html`,
            chunks: ['index'],
            hash: true,
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};