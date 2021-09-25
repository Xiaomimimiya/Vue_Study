// webpack配置文件

// 路径拼接
const path = require("path");

// 对象导出
module.exports = {
    // webpack的入口 就是哪个文件被打包 这里是对index.js进行打包
    entry: "./src/index.js",
    // 出口 就是打包后的输出文件 但必须是绝对路径 使用node进行拼接
    output: {
        path: path.resolve(__dirname, "./build"),
        // 指定打包后的文件名
        filename: "build.js"
    },
    // 配置各种模块
    module: {
        rules: [{
            //使用正则表达式
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }]
    }
}