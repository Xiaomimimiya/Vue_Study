<template>
    <div>
        <button v-for="item in tabs" :key="item"
            @click="itemClick(item)"
            :class="{active:currentTab===item}">
            {{item}}
        </button>
    <!--2。 动态组件 -->
    <!-- 使用内置组件keep-alive 可以保持组件切换 内容不会被销毁 而进行缓存 -->
    <!-- 如果是多个组件需要缓存 就使用v-bind:include -->
    <keep-alive include="about,home,categlory">
             <component :is="currentTab"
                name="xiaomi"
                age="20"
                @click="pageclick"
                >
             </component>
    </keep-alive>


    <!--1。 可以使用v-if进行判断 -->
    <!-- 
    <template v-if="currentTab==='xiao'">
        <home></home>
    </template>
    <template v-else-if="currentTab==='mi'">
        <about></about>
    </template>
    <template v-else>
        <categlory></categlory>
    </template> 
    -->

   
    </div>
</template>

<script>
import Home from "./Page/home.vue"
import About from "./Page/about.vue"
import Categlory from "./Page/categlory.vue"
    export default {
        components:{
            Home,
            About,
            Categlory
            },
        data() {
            return {
                tabs:["home","about","categlory"],
                currentTab:""
            }
        },
        methods: {
            itemClick(item){
                this.currentTab=item;
            },
            pageclick(){
                console.log("page发生点击");
            }
        },
    }
</script>

<style scoped>
    .active{
        color: red;
    }
</style>