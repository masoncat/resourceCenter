/**
 * Created by wm.liu on 2018/5/7.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: ['./src/index.js'],
    output: {
        filename: "[name].dev.js",
        path: path.resolve(__dirname, 'dev')
    },
    module: {
        rules: [{
            include: /src/,
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        "presets": ["react"]
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            })

        }]
    },
    plugins: [new ExtractTextPlugin('style.css')]
};