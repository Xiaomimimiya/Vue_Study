const path = require("path")

module.exports = {
    // webpack配置文件
    entry : "./src/utils/index.js",
    output : {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./bundle")
    }
}