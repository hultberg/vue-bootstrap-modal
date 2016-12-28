var path = require('path'),
    webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: "./resources/assets/js/app.js",
  output: {
    filename: "app.js",
    publicPath: "/js/",
    path: path.resolve(__dirname, 'public/')
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    port: 9090
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src/')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  context: __dirname,
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules/')
        ],
        loader: "babel-loader"
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css!sass'
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: 'style!css!sass',
            css: ExtractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            })
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" })
  ]
}
