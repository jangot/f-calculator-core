const path = require('path');

module.exports = {
    entry: './src/build.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
