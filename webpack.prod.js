const path = require('path')
const webpack = require('webpack')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

require('dotenv').config()

module.exports = env => {
  return {
    entry: {
      main: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
    },

    mode: 'development',

    output: {
      filename: '[name].[hash.8].bundle.js',
      // chunkFilename: '[name].[hash.8].chunk.js',
      path: path.resolve(__dirname, '/dist'),
      publicPath: '/',
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
    },

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
      new HTMLWebpackPlugin({
        template: './src/index.html',
        inject: true,
        title: 'Timing',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
          NODE_PATH: 'src/',
        },
      }),
      new MinifyPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip',
      }),
      new BrotliPlugin(),
    ],
  }
}
