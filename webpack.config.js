const path = require("path");

module.exports = {
    entry: "./src/popup.js",
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        }, {
            test: /\.(png)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[hash:4].[ext]',
                outputPath: "../images/",
              }
            }]
        }, {
            test: /\.(woff(2)?)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: "../fonts/",
              }
            }]
        }]
    },
    output: {
        path: path.resolve(__dirname, './app/scripts/'),
        filename: "popup.js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "./app"),
        watchContentBase: true,
        writeToDisk: true,
        compress: true,
        port: 9000,
        progress: true,
        open: true,
        disableHostCheck: true,
        historyApiFallback: {
            index: "popup.html"
        }
    }
};