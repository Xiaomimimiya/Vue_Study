<template>
    <div>
        <tab-control :titles="titles" @titleclick="titleclick"></tab-control>
        <h2 class="contents">{{contents[currentIndex]}}</h2>
    </div>
</template>

<script>
import TabControl from "./TabControl.vue"
    export default {
        components:{
            TabControl,
        },
        data() {
            return {
                titles:["衣服","鞋子","裤子"],
                contents:["衣服界面","鞋子界面","裤子界面"],
                currentIndex:0
            }
        },
        methods: {
            titleclick(index){
                this.currentIndex=index;
            }
        },
    }
</script>

<style scoped>
.contents{
   text-align:center;
   background-color: brown;
}
</style>