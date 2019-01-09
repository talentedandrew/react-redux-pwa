require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const commonConfig = {
  mode: 'development',
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.sass$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]},
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less -loader'],
      }
    ]
  }
};
module.exports = {
  ...commonConfig,
  entry: "./src/client/main.js",
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "../public")
  },
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    overlay: true,
    hot: true,
    open:true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
