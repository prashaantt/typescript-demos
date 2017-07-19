import glob = require("glob");
import { Configuration } from "webpack";

const config: Configuration = {
    entry: glob.sync("./**/*.spec.ts"),
    output: {
        filename: "./public/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "source-map",
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

export default config;
