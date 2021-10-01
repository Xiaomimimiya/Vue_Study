<template>
    <h2 class="app_test">app</h2>
    <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
    export default {
        components:{
            HelloWorld,
        }
    }
</script>

<style scoped>
    h2{
    color: red;
    }
    .app_test{
        color: blue;
    }
</style>