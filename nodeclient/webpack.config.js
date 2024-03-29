var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"

});
module.exports = {
    entry: __dirname + "/app/index.js",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    output: {
        filename: "transformed.js",
        //Automate "npm run build" 
        path: "../WhatsUp/WhatsUp"
    },
    plugins: [HTMLWebpackPluginConfig]
};