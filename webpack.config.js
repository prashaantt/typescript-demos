const glob = require("glob");

module.exports = {
    entry: glob.sync("./**/*.spec.ts"),
    output: {
        filename: "./public/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    node: {
        fs: "empty"
    }
};
