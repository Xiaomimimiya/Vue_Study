<template>
    <div id="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>

</template>

<script>
    // 将其分成各自的vue文件 然后在App.vue中引入

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

    export default {
    //   导入组件后还需要进行注册
        components:{
            Header,
            Main,
            Footer,
        }
    }
</script>

<style scoped>

</style>