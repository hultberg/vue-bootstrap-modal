import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractPlugin = new ExtractTextPlugin({
  filename: 'style.css',
  disable: process.env.NODE_ENV === 'development',
});

export default {
  name: 'js',

  entry: {
    app: [
      'bootstrap/js/src/modal.js',
      './resources/assets/js/app.js',
    ],
  },

  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, 'public/'),
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    port: 9090,
  },

  resolve: {
    alias: {
      '@': path.join(__dirname),
      'vue$': 'vue/dist/vue.common.js',
    },
  },

  context: __dirname,

  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'sass-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: extractPlugin.extract({
              fallback: 'style-loader', // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              use: 'css-loader',
            }),
          },
        },
      },
    ],
  },

  plugins: [
    extractPlugin,
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
  ],
};
