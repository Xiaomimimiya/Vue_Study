// 借助插件来进行格式化
import dayjs from "dayjs";
export default function registerFormatetime(app) {

    // 使用app 进行全局注册
    let formatetime = "YYYY-MM-DD HH:mm:ss";
    app.directive("formate-time", {
        created(el, bindings) {
            if (bindings.value) {
                formatetime = bindings.value
            }
        },
        mounted(el, bindings) {
            // 如果没有传值 就进行默认格式 
            const textContent = el.textContent;
            let timestamp = parseInt(textContent);

            if (textContent.length == 10) {
                timestamp = timestamp * 1000
            }
            el.textContent = dayjs(timestamp).format(formatetime)
        },
    })
}