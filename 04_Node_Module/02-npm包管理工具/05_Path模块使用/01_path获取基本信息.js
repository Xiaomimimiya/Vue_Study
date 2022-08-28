const path = require("path")

// 1、获取路径的相关信息
const filePath = "c://abc/cba/nba.txt"

console.log(path.extname(filePath));
console.log(path.basename(filePath));
console.log(path.dirname(filePath));

// 2、多个路径拼接

const path1 = "/abc/cba"

const path2 = "../why/kobe/james.txt"

console.log(path.join(path1 + path2));

// 3、多个路径拼接 返回一个绝对路径==========>重要

// 从右往左拼接 遇到绝对路径 停止拼接
console.log("----------------");
console.log(path.resolve(path1+path2));
