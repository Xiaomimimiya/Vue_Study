<template>
    <show-message class="xiaomi" :title="title" :content="content"></show-message>
    <!-- 关于data数据的调用 -->
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
    <mulit-element-vue id="xiaomi"></mulit-element-vue>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MulitElementVue from "./MulitElement.vue";
    export default {
        // 禁用自动继承propos
        inheritAttrs:false,
        components:{
            ShowMessage,
            MulitElementVue
        },
        data() {
            return {
                title:"xx",
                content:"mm",
                message:{
                    title:"xiao",
                    content:"mi",
                }
            }
        },
    }
</script>

<style scoped>

</style>