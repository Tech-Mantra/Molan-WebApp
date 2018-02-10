const webpack = require('webpack'),
      path    = require('path'),
      env     = process.env,
      PACKAGE = require('./package.json'),
      BUILD_DIR = path.resolve(__dirname, 'js'),
      PUBLIC_DIR = path.resolve(__dirname),
      APP_DIR = path.resolve(__dirname, 'src');

let banner = PACKAGE.name.toString() + ' - ' + PACKAGE.version.toString()
            + ' | ' + '(C) ' + new Date().getFullYear().toString() + ', '
            + PACKAGE.author.toString() + ' | ' + PACKAGE.license.toString()

module.exports = {
    entry: [ APP_DIR + '/index.js' ],
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1', 'react-hmre']
                }
            },
            {
               test: /\.css$/,
               loader: "style-loader!css-loader"
            },
            {
               test: /\.(jpe?g|gif|png)$/,
               loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
            }
        ],
        rules: [
            {
              'test': /\.js$/,
              'use': 'babel',
              'exclude': /node_modules/,
              'options': {
                 'plugins': [],
                 'presets': [['env', {
                    'modules': false,
                    'targets': { 'node': 6 }
                  }]]
              }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    node: {
        net: 'empty',
        dns: 'empty'
    },
    plugins: env.NODE_ENV !== 'developement' ? [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false
            }
        }),
        new webpack.BannerPlugin(banner, { entryOnly: true })
    ] : [],
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: './'
    }
};

