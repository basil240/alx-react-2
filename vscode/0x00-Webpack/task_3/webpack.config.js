const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './src/header/header.js',
    body: './src/body/body.js',
    footer: './src/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'header.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'body.html',
      chunks: ['body'],
    }),
    new HtmlWebpackPlugin({
      filename: 'footer.html',
      chunks: ['footer'],
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 8564,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    open: true,
  },
  devtool: 'inline-source-map',
};