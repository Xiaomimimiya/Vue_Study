const { CleanWebpackPlugin} = require("clean-webpack-plugin")

const {merge} = require("webpack-merge")

const commconfig = require("./webpack.conmm.config")

module.exports = merge(commconfig, {
   // webpack配置文件
   mode:"production",
   plugins:[ 
       new CleanWebpackPlugin(),
   ]
})