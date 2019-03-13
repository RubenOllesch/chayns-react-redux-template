import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AppcacheWebpackPlugin from 'appcache-webpack-plugin';
import getBaseConfig from './base-config';

const ROOT_PATH = path.resolve('./');

export default {
    ...getBaseConfig(false),
    devtool: 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'src/index.staging.html')
        }),
        new AppcacheWebpackPlugin({
            cache: [
                'https://api.chayns.net/css/v4.1',
                'https://api.chayns-static.space/js/v4.0/chayns.min.js',
                'https://polyfillsvc.tobit.com/polyfill.min.js?flags=gated&features=default,es6,Map'
            ],
            output: 'cache.manifest'
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: true,
            __LIVE__: false
        })
    ]
};
