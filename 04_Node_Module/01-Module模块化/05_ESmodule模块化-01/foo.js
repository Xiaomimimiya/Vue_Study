const name = "xiaomi";
const age = 12;
function sayHello(){
    return "foo.js"
}

// 导出语法   ======>在main.js进行导入
// 注意是export
export {
    name,
    age,
    sayHello
}
