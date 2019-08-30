const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = env => ({
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
    entry: [
        env.production ? false : 'react-dev-utils/webpackHotDevClient',
        './src/index',
    ].filter(Boolean),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: env.production ? '[name].[contenthash].js' : 'bundle.js',
    },
    devServer: {
        hot: true,
        contentBase: './dist',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: env.production
            ? undefined
            : {
                'react-dom': '@hot-loader/react-dom',
            },
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: env.production && {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, './src'),
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            // Pass the formatter:
                            formatter: eslintFormatter,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hemsmart',
            // Load a custom template (lodash by default)
            template: 'src/index.html',
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
        new webpack.NamedModulesPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
});
