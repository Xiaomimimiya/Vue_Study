// webpack配置文件

// 路径拼接
const path = require("path");
// 加载插件之自动覆盖直接打包的文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// html自动打包插件
const htmlWebpackPlugin = require("html-webpack-plugin");

// 自定义数据填空插件 为webpack内置的
const { DefinePlugin } = require("webpack");

// copy插件
const copyWebpackPlugin = require("copy-webpack-plugin");

// 对象导出
module.exports = {

    // 使用开发者模式进行开发 developlent =====>
    // 真实打包上线会使用production 模式
    mode: "development",
    // 开发工具===================> 能够让我们进行代码的调试 看到代码错误的具体位置

    devtool: "source-map",

    // webpack的入口 就是哪个文件被打包 这里是对index.js进行打包
    entry: "./src/index.js",

    // 出口 就是打包后的输出文件 但必须是绝对路径 使用node进行拼接
    output: {
        path: path.resolve(__dirname, "./build"),
        // 指定打包后的文件名
        filename: "js/build.js",
    },

    // 配置各种模块
    module: {
        rules: [{
            //使用正则表达式 css打包
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            // less打包
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }, {
            // test: /\.(jpeg|jpg|png|gif|svg)$/,
            // use: {
            //     loader: "url-loader",
            //     options: {
            //         outputPath: "img",
            //         name: "[name]_[hash:6].[ext]",
            //         limit: 100 * 1024
            //     }
            // }
            // webpack5 新的方法 实现图片打包
            test: /\.(jpeg|jpg|png|gif|svg)$/,
            type: "asset",
            generator: {
                filename: "img/[name]_[hash:6][ext]"
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 100 * 1024
                }
            }
        }, {
            // 文字打包
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: "font/[name]_[hash:6][ext]"
            },
        }]
    },
    // 配置插件 =====>前面已经导入
    // 可以在里面导入引入的插件
    plugins: [
        // 一个个插件对象   CleanWebpackPlugin会覆盖打包的文件
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            // 使用模板进行打包
            template: "./public/index.html"
        }),
        new DefinePlugin({
            // 更改base_url
            BASE_URL: "'./'",
            // 会更改title
            // title:"hahah",
        }),
        // 复制插件
        new copyWebpackPlugin({
            patterns: [{
                from: "public",
                to: "./",
                globOptions: {
                    ignore: [
                        "**/index.html"
                    ]
                }
            }, ]
        }),
    ]
}