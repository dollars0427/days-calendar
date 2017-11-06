var path = require('path');
var webpack = require('webpack');

module.exports = {
    "entry": "./src/main.js",
    "output": {
        "path": __dirname + "/dist",
        "library": 'Days',
        "libraryTarget": 'commonjs2',
        "filename": "Days.js"
    },
    "resolve": {
        "extensions": ['', '.js', '.vue'],
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
