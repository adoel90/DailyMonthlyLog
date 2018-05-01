// webpack.config.js

'use strict';

const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: './app.js',

    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    watch: true,

    module: {
        rules: [
            {
                // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
                // to CKEditor 5's icons only.
                test: /\.svg$/,

                use: [ 'raw-loader' ]
            },
            {
                // Or /ckeditor5-[^/]+\/theme\/[^/]+\.css$/ if you want to limit this loader
                // to CKEditor 5's theme only.
                test: /\.css$/,
                use: [
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
                ],
             
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]

    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        compress: true,
        hot: true,
        port: 9000,
        hotOnly: true
    },

    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],

    // Useful for debugging.
    devtool: 'source-map'
};