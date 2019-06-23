const path = require('path');
const packageJSON = require('./package');

module.exports = {
    entry: './src/build.js',
    output: {
        filename: `main.${packageJSON.version}.js`,
        path: path.resolve(__dirname, 'dist')
    }
};
