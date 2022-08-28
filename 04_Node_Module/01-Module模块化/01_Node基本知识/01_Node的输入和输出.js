// 输出就采取传统的

console.log("1","22");

// 输入参数 则是在node 之后进行传递
// 读取的方法
// 多少个就是2 3 4 5 6 这样子获取
const arg1 = process.argv[2]
const arg2 = process.argv[3]

console.log(arg1, arg2);