/**
 * Created by wm.liu on 2018/5/7.
 */
var path = require('path');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: "[name].dev.js",
        path: path.resolve(__dirname,'dev')
    }
};