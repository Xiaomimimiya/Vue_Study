<template>
    <div>
        <!-- 绑定元素 -->
        <h2 ref="title">xxx</h2>

        <!-- 绑定到一个实例组件上 -->
        <nav-bar-vue ref="navbar"></nav-bar-vue>
        <button @click="btnclick">获取元素</button>
    </div>
</template>

<script>
import NavBarVue from "./NavBar.vue";

    export default {
        components:{
            NavBarVue
        },
        data() {
            return {
                message:"hellow"
            }
        },

        methods: {
            btnclick(){
                console.log(this.$refs.title);
                console.log(this.$refs.navbar.message);
                this.$refs.navbar.getParent();
            }
        },
    }
</script>

<style scoped>

</style>