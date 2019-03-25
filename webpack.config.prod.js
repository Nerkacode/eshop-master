const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  mode: "production",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new CleanWebpackPlugin()],
});
