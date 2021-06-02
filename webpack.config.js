const path = require("path");

module.exports = {
    entry: './public/assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};