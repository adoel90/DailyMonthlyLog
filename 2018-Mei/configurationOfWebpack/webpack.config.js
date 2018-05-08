const path = require('path'),
      webpack = require('webpack'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');


// New Configuration from CK Editor
// const regeneratorRuntime = require("regenerator-runtime");
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const BabiliPlugin = require( 'babel-minify-webpack-plugin' );



const extractPlugin = new ExtractTextPlugin({ filename: './assets/css/app.css' });

const config = {

  // absolute path for project root
  context: path.resolve(__dirname, 'src'),

  entry: [require.resolve( 'regenerator-runtime' ), './app.js'],
  // entry: {
  //   // relative path declaration
  //   app: './app.js'
  // },

  output: {
    // absolute path declaration
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },

  module: {
    rules: [

      // babel-loader with 'env' preset
      { test: /\.js$/, include: /src/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ['env'] } } },
      // html-loader
      { test: /\.html$/, use: ['html-loader'] },
      // sass-loader with sourceMap activated
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      // file-loader(for images)
      { test: /\.(jpg|png|gif|svg)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/media/' } } ] },
      // file-loader(for fonts)
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },

      {test: /\.svg$/, use : [ 'raw-loader' ]},
      
      {
        test: /\.css$/, 
        use :  [
          {
              loader: 'style-loader',
              options: {
                  singleton: true
              }
          },
          {
              loader: 'postcss-loader',
              options: styles.getPostCssConfig( {
                  themeImporter: {
                      themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                  },
                  minify: true
              } )
          },
      ]},

      {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [ require( 'babel-preset-env' ) ]
                }
            }
        ]
      }

    ]
  },

  plugins: [
    // cleaning up only 'dist' folder
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // extract-text-webpack-plugin instance
    extractPlugin,
    new CKEditorWebpackPlugin( {
      // See https://docs.ckeditor.com/ckeditor5/latest/features/ui-language.html
      language: 'pl'
  } )
  ],

  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    // open app in localhost:2000
    port: 2000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'

};

module.exports = config;
