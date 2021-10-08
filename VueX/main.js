import { createApp } from "vue"

import App from "./App.vue";

//仓库导入 
import store from "./store";

const app = createApp(App);
app.use(store);
app.mount("#app")