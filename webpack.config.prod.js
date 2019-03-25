const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelrc = JSON.parse(fs.readFileSync("./.babelrc"));

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./src/index.js"],
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: babelrc,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "index.bundle.css" }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
