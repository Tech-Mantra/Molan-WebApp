const webpack = require("webpack"),
      path    = require("path"),
      env     = process.env,
      PACKAGE = require("./package.json"),
      BUILD_DIR = path.resolve(__dirname, "assets/js"),
      APP_DIR = path.resolve(__dirname, "app");

let banner = PACKAGE.name.toString() + " - " + PACKAGE.version.toString()
            + " | " + "(C) " + new Date().getFullYear().toString() + ", "
            + PACKAGE.author.toString() + " | " + PACKAGE.license.toString()

module.exports = {
    entry: [ APP_DIR + "/index.js" ],
    output: {
        path: BUILD_DIR,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "react-hmre"]
                }
            },
            {
               test: /\.css$/,
               loader: "style-loader!css-loader"
            },
            {
               test: /\.(jpe?g|gif|png)$/,
               loader: "file-loader?emitFile=false&name=[path][name].[ext]"
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    node: {
        net: "empty",
        dns: "empty"
    },
    plugins: [ new webpack.BannerPlugin(banner) ],
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: "./"
    }
};
