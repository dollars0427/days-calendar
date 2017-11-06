var path = require('path');
var webpack = require('webpack');

module.exports = {
    "entry": "./main.js",
    "output": {
        "path": __dirname + "/dist",
        "filename": "bundle.js"
    },
    "resolve": {
        "extensions": ['', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    "module": {
        "loaders": [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
              test: /\.scss$/,
              loader:'sass-loader',
              exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    "plugins":[
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/(en|zh-hk|zh-tw|zh-cn)$/),
    ]
}
