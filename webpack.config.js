const webpack = require("webpack");
const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
    entry: {},
    output: {
        filename: 'main.bundle.js',
        path: __dirname + '/public/dist'
      },
    module: {},
    plugins: [
        new WebpackPwaManifest({
            name: "PO number",
            short_name: "PO",
            description: "To get a PO number from your phone. Even when there is no service.",
            start_url: "./views/layouts/main.handlebars",
            background_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
                src: path.resolve("./public/img/icons/Profile_logo.jpg"),
                sizes: [96,128,192,256,384,512],
                destination: path.join("icons")
            }]
        })
    ],
    mode: "development"
};

module.exports = config;