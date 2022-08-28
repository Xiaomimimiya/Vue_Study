// 未封装之前
// import {formateDate, formateTime} from "./utils/foo.js"
// import {lyric} from "./utils/forma.js"


// 封装了统一的接口之后

import {
    formateDate,
    formateTime,
    lyric
} from "./utils/index.js"

console.log(formateDate());
console.log(formateTime());
console.log(lyric);