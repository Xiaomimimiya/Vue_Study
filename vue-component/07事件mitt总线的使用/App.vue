<template>
    <div>
        <home></home>
        <about></about>
        <home-content-vue></home-content-vue>
    </div>
</template>

<script>
import Home from './Home'
import About from './About'
import HomeContentVue from './HomeContent'
    export default {
     components:{
         Home,
         About,
         HomeContentVue
     }
    }
</script>

<style scoped>

</style>