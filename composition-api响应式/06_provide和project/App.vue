<template>
    <div> 
       <Home></Home>
       <button @click="increase">+1</button>
    </div>
</template>

<script>
import { provide,ref,readonly } from "vue"

import Home from "./Home.vue"
    export default {
        components:{
            Home
        },
        setup() {
        const name="xiaomi";
        const count=ref(100);

            // 对于传递给子组件的数据 为了符合数据流的要求 
            // 使用readonly 来进行包裹 使其 不能修改
            provide("name",readonly(name));
            provide("count",readonly(count)); 

        const increase= ()=>{
            count.value++
        }
        return{
            increase,
            name,
            count
        }

    }
}
</script>

<style scoped>

</style>