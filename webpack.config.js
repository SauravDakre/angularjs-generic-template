const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist')
    },
    plugins: [
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