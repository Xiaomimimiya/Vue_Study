
// 导入方式一 直接导入
import {age, name, sayHello} from "./foo.js"

//  导入方式二  起别名 
// import {age , name as fname, sayHello} from "./foo.js"

// 导入方式二 导入所有模块 并需要别名

// import * as foo from "./foo.js"
// console.log( foo.age,  foo.name,  foo.sayHello());

console.log(age, name, sayHello());

console.log("main.js");