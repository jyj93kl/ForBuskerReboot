var path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src/main/webapp/WEB-INF/views/jsx'),
    entry: {
        main: './MainPage.jsx',
        sub: './SubPage.jsx'
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/webapp/resources/js/react/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src/main/webapp/resources"),
            "node_modules"
        ]
    }
};