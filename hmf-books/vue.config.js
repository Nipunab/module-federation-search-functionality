/* eslint-disable @typescript-eslint/no-var-requires */

const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PackageDependencies = require('./package.json').dependencies;
const path = require('path');
const dynamicRemote = require('./module-federation/dynamic-remote').default;

module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));
    config.optimization.delete('splitChunks');
    config.module.rule('svg').set('generator', {
      filename: 'assets/images/[name].[hash:8][ext]',
    });
    config.module.rule('images').set('generator', {
      filename: 'assets/images/[name].[hash:8][ext]',
    });

    config.plugin('copy-webpack-plugin').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: './src/assets/',
            to: './assets',
          },
          // If using nuclues icons and fonts uncomment
          // {
          //   from: './node_modules/@nucleus/core/fonts/files/*',
          //   to: './assets/fonts/',
          //   flatten: true,
          // },
          // {
          //   from: './node_modules/@nucleus/icon-library/dist/*.svg', // Copy only svg files
          //   to: './assets/icons/',
          //   flatten: true,
          // },
        ],
      },
    ]);
    config.plugin('compression-webpack-plugin').use(CompressionPlugin, [
      {
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$/,
        exclude: /config.js/,
      },
    ]);
    // uncomment if exposing modules
    config.entry('hmf_books').add('./module-federation/set-public-path');
    config.plugin('module-federation-plugin').use(ModuleFederationPlugin, [
      {
        name: 'hmf_books',
        filename: 'remoteEntry.js',
        exposes: {
          './books': './src/components/books.vue',
        },
        // Modules to be consumed
        remotes: {
          // remoteAppName: dynamicRemote({
          //   remoteName: 'remoteAppName',
          //   configProperty: 'REMOTE_URL',
          // }),
        },
        shared: {
          ...PackageDependencies,
          vue: {
            eager: true,
          },
          'vue-property-decorator': {
            eager: true,
          },
          'vue-class-component': {
            eager: true,
          },
        },
      },
    ]);
  },
  devServer: {
    host: 'localhost',
    port: 8081,
    historyApiFallback: true,
  },
  css: {
    extract: false,
    sourceMap: true,
    loaderOptions: {
      css: {
        url: {
          filter: (url) => {
            // If the URL is an absolute path (e.g. /images/foo.png)
            if (url.startsWith('/')) {
              return false;
            }

            return true;
          },
        },
      },
    },
  },
  transpileDependencies: ['lit-element', 'lit-html'],
};
