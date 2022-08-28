
const name = "xiaomi";
const age = 12;
function sayHello(){
    return "bar.js"
}

// 传统方式一
// exports.name = name
// exports.age = age
// exports.sayHello =sayHello

// 传统方式二
// module.exports.age = age
// module.exports.name=  name

// 开发中用的方式  
// 优势在于其他地方更改并不会影响到其所定义的值和逻辑

module.exports = {
    name,
    age,
    sayHello
}