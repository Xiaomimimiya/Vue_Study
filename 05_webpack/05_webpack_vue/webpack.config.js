const path = require("path")

// 配置插件 vue
const {VueLoaderPlugin} = require("vue-loader/dist/index")


module.exports = {
    // webpack配置文件
    entry: "./src/utils/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./bundle"),
        publicPath:"./bundle/"
    },
    // 可以对文件进行配置 可以省略后缀
    resolve:{
        extensions:['.js','.json', '.vue', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" }
                ],

            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {
                // 对于js 使用babel 来进行  
                //  npm install @babel/preset-env -D
                // 再进行预设
                test:/\.js$/,
                use:[
                    "babel-loader"
                ]
            },
            {
                test: /\.vue$/,
                use:[
                    "vue-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                // 资源类型 不需要用loader
              
                type: "asset",
                parser: {
                    dataUrlCondition:{
                        // 小于的打包到js中
                        // 大于的直接base64显示
                        maxSize: 15*1024
                    }
                },
                // 打包后的文件命名配置
                generator: {
                    // img 自动生成一个文件夹 避免都放在js中

                    // 文件名[name].文件类型[ext]
                    // hash 值 唯一的 8位[hash:8]
                    filename: "img/[name]_[hash:8].[ext]"
                }
                    
            }
            

        ]
    },
    // 配置插件 vue
    plugins:[ new VueLoaderPlugin()
    ]
    
}