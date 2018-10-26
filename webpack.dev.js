const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/?reload=true', './src/index.js'],
  },

  mode: 'development',

  output: {
    filename: '[name].[hash.8].bundle.js',
    // chunkFilename: '[name].[hash.8].chunk.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
  },

  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        NODE_PATH: JSON.stringify('env/'),
      },
    }),
    new HTMLWebpackPlugin({ template: './src/index.html' }),
  ],
}
