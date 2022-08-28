const path = require("path")

module.exports = {
    // webpack配置文件
    entry: "./src/utils/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./bundle")
    },
    module: {
        rules: [
            {
                // 告诉webpack要匹配的文件
                test: /\.css$/,
                use: [
                    // use中多个Loader的使用顺序是从后往前
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" }

                ],
                // 简写：有一个loader的情况
                //    use: [
                //     loader:"css-loader"
                //    ]
                // 简写二 :不需要其他属性时
                // use: [
                //     "style-loader",
                //     "css-loader"
                // ]
            },
            {
                // 处理less
                test: /\.less$/,
                use: [
                    // 三个loader都要添加

                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }

                ]
            }
        ]
    }
}