const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
    entry: './public/assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outputs to an HTML file in the dist folder
        })
    ],
    mode: 'development'
};
