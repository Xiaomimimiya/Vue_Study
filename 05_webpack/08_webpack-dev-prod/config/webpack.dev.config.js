

const {merge} = require("webpack-merge")

const commconfig = require("./webpack.conmm.config")

module.exports = merge(commconfig, {
    // webpack配置文件
    mode:"development",
   
    devServer:{
        hot: true
    }
}) 