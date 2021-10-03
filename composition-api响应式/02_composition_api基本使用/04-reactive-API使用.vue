<template>
    <div>
        Home Page
        <h2>当前计数：{{state.counter}}</h2>
        <button @click="increase">+1</button>
    </div>
</template>

<script>
// 引用组件来使数据动态变化
import { reactive } from "@vue/reactivity";
    export default {
     
        setup() {
            const state=reactive({
                counter:100
            })
            const increase = ()=>{
                state.counter++;
                console.log(state.counter);
            }
            return{
                state,
                increase,
            }
        }
    }
</script>

<style scoped>

</style>