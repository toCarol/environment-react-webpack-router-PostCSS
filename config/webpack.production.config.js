import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        index: [
            'eventsource-polyfill', // necessary for hot reloading with IE
            'webpack-hot-middleware/client?reload=true', // note that it reload the page it hot module reload 
            './src/index'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunk: ['index'],
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: "style-loader" 
                    },
                    { 
                        loader: "css-loader" ,
                        options: {
                            sourceMap: true,
                            importloaders: 1,
                            localIdentName: '[name].[local]',
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}