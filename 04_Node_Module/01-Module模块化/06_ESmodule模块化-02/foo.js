

// 导出方式三 在定义时就导出

export const name = "xiaomi";
export const age = 12;
export function sayHello(){
    return "foo.js"
}


// 导出方式一
// export {
//     name,
//     age,
//     sayHello
// }

// 导出方式二 起别名
// 则在导入时也要用 fname
// export {
//     name as fname,
//     age,
//     sayHello
// }
