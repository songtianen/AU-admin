const path = require('path');
const merge = require('webpack-merge');
// const PurifyCSS = require("purifycss-webpack");
// const glob = require("glob-all");
// const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const antdTheme = require('../theme');

const ROOT_PATH = path.resolve(__dirname);

const webpackProdConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    // publicPath: '/public/',
    publicPath: 'https://www.card12.com/public/',
    // publicPath: 'http://localhost:8888/public/', // 本地调试用
  },
  module: {
    rules: [
      {
        // loader编译之前，去验证
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        // 排除
        exclude: [
          path.join(ROOT_PATH, '../node_modules'),
          path.join(ROOT_PATH, '../src/libs'),
        ],
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /\.(less|css)$/,
        // exclude: "/node_modules|antd\.css/",
        use: [
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 15 versions'],
                }),
                // require('postcss-import')(),
                // require('stylelint')(),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: antdTheme,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 通过options 配置路径
              name: '[name].[ext]',
              limit: 8192,
              outputPath: 'assets/imgs/',
            },
          },
          {
            loader: 'img-loader', // 图片压缩
            options: {
              pngquant: {
                quality: 80,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),

    new CleanWebpackPlugin(),
    // new PurifyCSS({
    //   paths: glob.sync([
    //     // 要做CSS Tree Shaking的路径文件
    //     path.join(ROOTPATH, "../*.html"),
    //     // path.join(ROOTPATH, "../src/*.js")
    //   ])
    // }),
    //  前端压缩还是后端压缩商量好
    // new CompressionPlugin({
    //   filename: '[path].gz[query]', // 目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
    //   algorithm: 'gzip', // 算法
    //   test: /\.(js|css)$/, // 压缩 js 与 css
    //   threshold: 10240, // 只处理比这个值大的资源。按字节计算
    //   minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
    //   deleteOriginalAssets: true,
    // }),
  ],
});

module.exports = webpackProdConfig;
