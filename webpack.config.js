const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    output: {
        filename: "bundle.[hash].js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            // JS sources
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // CSS sources
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localsConvention: "camelCase",
                            sourceMap: true
                        }
                    }
                ]
            },
            // Images
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "src/images/eai_logo.png"
        }),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    devServer: {
        host: "localhost",
        hot: true,
        port: port,
        historyApiFallback: true
    }
};
