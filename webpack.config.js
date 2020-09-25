const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function exportMainConfig(context) {
  const {mode} = context;

  const baseConfig = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].covende.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                },
              ],
              '@babel/react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            ],
          },
        },
        {
          test: /\.svg$/,
          use: 'file-loader',
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        appMountId: 'app',
        template: 'src/index.html',
      }),
      new LodashModuleReplacementPlugin(),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin(),
      // new MiniCssExtractPlugin({
      //   filename: "[name].css",
      //   chunkFilename: "[id].css"
      // }),
      new CleanWebpackPlugin(),
      // new CompressionWebpackPlugin(),
    ],
    // optimization: {
    //   runtimeChunk: true,
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'js/vendors',
    //         chunks: 'all',
    //       },
    //     },
    //   },
    // },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          rxjsVendor: {
            test: /[\\/]node_modules[\\/](rxjs)[\\/]/,
            name: 'vendor/rxjs',
          },
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor/react',
          },
          muiVendor: {
            test: /[\\/]node_modules[\\/](@material-ui)[\\/]/,
            name: 'vendor/mui',
          },
          corejsVendor: {
            test: /[\\/]node_modules[\\/](core-js)[\\/]/,
            name: 'vendor/corejs',
          }
        },
      },
    },
  };

  if (mode === 'development') {
    // Dev
    // baseConfig.devtool = 'inline-source-map';
    baseConfig.devServer = {
      compress: true,
      historyApiFallback: true,
      port: 9000,
    };
  } else {
    // Prod
    // baseConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  }

  return baseConfig;
}
module.exports = (env, argv) => {
  const mode = typeof argv.mode == 'undefined' ? 'development' : argv.mode;
  const config = {mode};
  return exportMainConfig(config);
};
