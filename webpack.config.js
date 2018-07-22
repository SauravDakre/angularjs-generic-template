const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: '**/*',
                to: './.',
                context: './src/',
                force: true,
                ignore: [ '**/*.js', '**/*.css', '**/*.scss' ]
            }
        ]),
        new HtmlWebpackPlugin({
            title: 'Weather',
            template: './src/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    }
}