<template>
    <div id="app">
        <!-- 仓库数据的使用 -->
        <!-- <button @click="increase">+1</button>
        <button @click="decrease">-1</button> -->
        <home-vue></home-vue>
    </div>
</template>

<script>
import HomeVue from "./pages/Home.vue"
    export default {
        name:"App",
        components:{
            HomeVue
        },
        methods: {
            increase(){
                // 虽然可以调用 但是违反了vuex框架的原则 即需要把数据抽离出来 
                // 但是不能在组件里面进行修改 而是需要去index.js mutations函数中进行
                // 在此调用commit
                this.$store.commit("increase")
            },
            decrease(){
                this.$store.commit("decrease")
            }
        },
    }
</script>

<style scoped>

</style>