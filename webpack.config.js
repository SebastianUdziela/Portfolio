const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/main.js",
        animation  : "./src/js/animation.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist/js")
    },
    watch: false,
    mode: "development",
}