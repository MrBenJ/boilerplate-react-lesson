var path = require('path');

module.exports = function() {

    let config = {
        entry: {
            "app": "./ui/app"
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        'eslint-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
    return config;
};
