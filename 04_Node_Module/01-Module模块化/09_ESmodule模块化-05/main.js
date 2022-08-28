let flag = true
if (flag) {
    // 不允许在逻辑代码中编写import导入声明语法，只能写到js代码顶层
    // import {name, age, test} from "./foo.js"
    // console.log(name, age, test)

    // 但是确实是需要在逻辑成立时进行导入 
    
    // 那么就使用import 函数来进行

    // const importPromise = import("./foo.js")
    // importPromise.then(res=>{
    //     console.log(res.age, res.name);
    // })

    import("./foo.js").then(res => {
        console.log(res.age, res.name);
    })
}