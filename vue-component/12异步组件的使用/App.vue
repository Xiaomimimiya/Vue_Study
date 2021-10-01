<template>
    <div>
        <h2>App组件</h2>
        <home-vue></home-vue>
        <asy-categlory-vue></asy-categlory-vue>
    </div>
</template>

<script>
import homeVue from "./home.vue"
import AsyCategloryVue from "./AsyCateglory.vue"
// import Loading from "./Loading.vue"

// 对.vue分包
// import { defineAsyncComponent } from "@vue/runtime-core"
// // 成为异步组件
// const AsyCategloryVue = defineAsyncComponent(() =>import("./AsyCateglory.vue"))


    export default {
        components:{
            homeVue,
            AsyCategloryVue,
       
        }
    }
</script>

<style scoped>

</style>