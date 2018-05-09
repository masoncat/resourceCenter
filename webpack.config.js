/**
 * Created by wm.liu on 2018/5/7.
 */
var path = require('path');
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
        }]
    }
};