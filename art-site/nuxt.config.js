const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

function srcPath(subdir) {
  return path.join(__dirname, 'Scripts', subdir);
}

const config = {
  mode: 'development',
  entry: './Scripts/Index.tsx',
  output: {
    filename: 'scripts/js/bundle.js',
    path: __dirname + 'wwwroot'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      App: srcPath('App'),
      Utility: srcPath('Utility')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  target: 'web'
};


// const config = {
//   entry: './js/index.js',
//   output: {
//     path: '/path/to/output/js',
//     filename: 'output.js'
//   },
//   module: {

//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       $: "jquery",
//       jQuery: "jquery",
//       "window.jQuery": "jquery",
//     })
//   ]
// }

module.exports = config;

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
      vendor: ['axios'],
      layouts: false,
      pages: true,
      commons: true,
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        '$': 'jquery',
        '_': 'lodash'
      }),
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
