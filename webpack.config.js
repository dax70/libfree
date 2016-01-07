/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');
var dir_test = path.resolve(__dirname, 'test');


module.exports = {
    entry: {
      main: path.resolve(dir_js, 'main.js'),
      test: path.resolve(dir_test, 'index.js'),
    },
    output: {
        path: dir_build,
        filename: '[name].js'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'react-hot',
                test: dir_js,
            },
            // {
            //     loader: 'babel-loader',
            //     test: dir_js,
            //     query: {
            //         presets: ['es2015', 'react'],
            //     },
            // }
            {
              test: /\.js$/, // Transform all .js files required somewhere within an entry point...
              loader: 'babel', // ...with the specified loaders...
              exclude: path.join(__dirname, '/node_modules/') // ...except for the node_modules folder.
            }
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
