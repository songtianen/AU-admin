const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ROOTPATH = path.resolve(__dirname);
const isProd = process.env.NODE_ENV === 'production';
console.log('song-tianen-宋', process.env.NODE_ENV);
/*
  webpack配置文件里获取process.envNODE_ENV的值 由 cross-env 传入定义的
  开发文件中获取全局变量由webpack.DefinePlugin() 定义
 */
console.log('webpack环境打印process.env.NODE_ENV:', process.env.NODE_ENV);

const baseWebpackConfig = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: path.join(ROOTPATH, '../src/index'),
  },
  output: {
    path: path.join(ROOTPATH, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  // mode为production自动启用
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          comments: false,
          ecma: 6,
          cache: true,
          parallel: true,
          compress: {
            drop_console: true, // console
            pure_funcs: ['console.log'], // 移除console
          },
        },
        // uglifyOptions: {
        //   warnings: false,
        //   parse: {},
        //   compress: {},
        //   mangle: true, // Note `mangle.properties` is `false` by default.
        //   output: null,
        //   toplevel: false,
        //   nameCache: null,
        //   ie8: false,
        //   keep_fnames: false,
        // },
      }),
      // 压缩css
      new OptimizeCSSAssetsPlugin(),
      // {
      // cssProcessorOptions: {
      //   map: { inline: false }
      // }
      // }
    ],
    runtimeChunk: true,
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        // styles: {
        //   name: 'styles',
        //   test: /\.less$/,
        //   chunks: 'all',
        //   enforce: true
        // },
        vendor: {
          // test(module) {
          //   // 阻止.css文件资源打包到vendor chunk中
          //   if (module.resource && /\.css$/.test(module.resource)) {
          //     return false;
          //   }
          //   // node_modules目录下的模块打包到vendor chunk中
          //   return module.context && module.context.includes('node_modules');
          // },
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // 由于mac不区分大小写，linux区分大小写，可能导致mac上正常，在部署时出错，所以强制区分大小写
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
      },
      filename: 'index.html',
      template: path.join(ROOTPATH, '../src/index.html'),
    }),
    new webpack.DefinePlugin({
      WEBPACK_ENV: isProd
        ? JSON.stringify('production')
        : JSON.stringify('development'),
    }),
  ],
};

module.exports = baseWebpackConfig;
