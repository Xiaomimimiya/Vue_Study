
// 方式一 传统方法
// function parseLyric(){
//     return ["歌词解析"]
// }
// export {
//     parseLyric
// }

// 方式二 默认导出

// export default parseLyric()

// 方式三 直接作为默认标识符 
export default function(){
    return ["歌词"]
}