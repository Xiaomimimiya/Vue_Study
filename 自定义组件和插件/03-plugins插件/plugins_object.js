export default {
    install(app) {
        // 在App.vue 可以获取
        app.config.globalProperties.$name = "Xiaomi";
    }
}