import { ref, watch } from "vue"
export default function(title = "vue 3.0") {

    const titleRef = ref(title);

    watch(titleRef, (newvalue) => {
        document.title = newvalue
    }, {
        // 立即执行 才能显示默认值
        immediate: true
    })
    return titleRef
}