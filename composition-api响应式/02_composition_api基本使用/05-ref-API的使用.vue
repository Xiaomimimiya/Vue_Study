<template>
    <div>
        Home Page
        <!-- template 里面自动解包  不需要使用.value -->
        <h2>当前计数：{{counter}}</h2>
        <button @click="increase">+1</button>
    </div>
</template>

<script>
// 引用组件来使数据动态变化
import { ref } from "@vue/reactivity";
    export default {
     
        setup() {
            let counter=ref(100);
            // 注意使用.value 进行解包
            const increase = ()=>{
              counter.value++;
                console.log(counter.value);
            }
            return{
                counter,
                increase,
            }
        }
    }
</script>

<style scoped>

</style>