import { createApp } from "vue"
import router from "./router"

import App from "./App.vue";

const app = createApp(App);

// 安装-使用路由
app.use(router);
app.mount("#app");