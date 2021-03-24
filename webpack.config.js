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
        }]
    },
    output: {
        path: path.resolve(__dirname, './app/scripts/'),
        filename: "popup.js"
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./app"),
        watchContentBase: true,
        writeToDisk: true,
        compress: true,
        port: 9000,
        progress: true,
        open: true,
        historyApiFallback: {
            index: "popup.html"
        }
    }
};