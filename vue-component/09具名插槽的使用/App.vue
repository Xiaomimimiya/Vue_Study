<template>
    <div>
<nav-bar-vue>
    <!-- 插槽命名后 再指定名称 -->
    <template v-slot:left>
        <button>左边按钮</button> 
    </template>

    <template v-slot:center>
        <h2>标题</h2>
    </template>

    <template  v-slot:right>
        <i>右边文字</i>
    </template>
</nav-bar-vue>
    </div>
</template>

<script>
import NavBarVue from "./NavBar.vue"
    export default {
        components:{
            NavBarVue
        }
    }
</script>

<style scoped>

</style>