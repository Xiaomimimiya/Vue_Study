import { createApp } from 'vue'
// 导入
import App from './component/App.vue'
import productItem from "./component/product.vue"

const app =createApp(App)

// 导入的组件进行全局注册

// app.component(
//     "product-item",productItem
// )
app.mount('#app')
