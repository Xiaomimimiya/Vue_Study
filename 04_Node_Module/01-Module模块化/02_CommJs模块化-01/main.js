// 导入

// 定义返回值
// const util =  require("./util")

// 输出导入内容 获取其属性
// console.log(util.BASE_URL);
// console.log(util.formateDate());
// console.log(util.formateTime());

// 导入时 直接对其进行结构

const {
    BASE_URL,
    formateDate,
    formateTime
} = require("./util")

console.log(BASE_URL);
console.log(formateDate());
console.log(formateTime());