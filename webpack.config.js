
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3099,
        publicPath: 'http://localhost:3099/dist/',
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'eval-source-map',
}