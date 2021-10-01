import { createApp } from 'vue'
import App from './15组件的v-model/App.vue';
// import { sum } from "./12异步组件的使用/utlis/math.js"

// console.log(sum(20, 30));

// webpack分包====1
// 使用import导入的函数 webpack在对项目进行打包的时候 就会进行分包的操作
// import ("./12异步组件的使用/utlis/math").then((res) => {
//     console.log(res.sum(30, 40));
// })
// webpack分包====2


createApp(App).mount('#app')