import { createApp } from 'vue'
import App from './03-plugins插件/App.vue'
import registerDirectives from './02-directives封装';
import plugins_object from './03-plugins插件/plugins_object'

const app = createApp(App);

// 使用自定义指令
registerDirectives(app);

// 使用插件
app.use(plugins_object);


//全局自定义指令
// app.directive("focus", {
//     mounted(el) {
//         console.log("focus-mounted");
//         el.focus();
//     }
// })
app.mount('#app')