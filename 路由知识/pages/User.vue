<template>
    <div>
        <!-- 动态获取到配置路由中设置的name和id -->
        <h2>User：{{$route.params.usename}}-{{$route.params.id}}</h2>
    </div>
</template>

<script>
import { useRoute } from "vue-router"
    export default {
        //通过生命周期获取name
        // created() {
        //     console.log(this.$route.params.usename)
        // },

        //通过setup获取 需要先调用useRoute 的内置组件
        setup() {
            const route = useRoute();
            console.log(route.params.usename);  //about-home-xiaomi
        }
    }
</script>

<style scoped>

</style>