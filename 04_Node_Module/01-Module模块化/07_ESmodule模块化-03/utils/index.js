// 作为模块的总导入接口 
// 既有导入也有导出 两者结合

//  统一入口和出口

// 最易懂的方式

// 导入
// import { formateDate, formateTime } from "./foo.js"
// import { lyric } from "./forma.js"

// 导出
// export {
//     formateDate,
//     formateTime,
//     lyric
// }

// 优化一 导入和导出结合  =============> 最好
export {formateDate, formateTime} from "./foo.js"
export {lyric} from "./forma.js"

// 优化二 
// export * from "./foo.js"
// export * from "./forma.js"