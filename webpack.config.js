const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const basePath = __dirname

module.exports = (mode) => ({
  entry: [path.resolve(basePath, 'src', 'index.tsx')],
  output: {
    path: path.resolve(basePath, 'build'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: mode === 'development' ? 'inline-source-map' : false,
  devServer: {
    port: 3001,
    contentBase: path.resolve(basePath, 'build'),
    open: true,
    compress: true,
    watchContentBase: true,
    progress: true,
  },
  experiments: {
    asset: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: (module, chunks, cacheGroupKey) => {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `${cacheGroupKey}.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(basePath, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
})
