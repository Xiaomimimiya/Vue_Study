<template>
    <div> 
        <button @click="increase">增加</button>
        <h2>{{counter}}</h2>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import { onMounted,onUpdated,onUnmounted } from "@vue/runtime-core"
    export default {
        setup() {
            const counter =ref(10);
            const increase = ()=>{
                counter.value++
            }
            onMounted(()=>{
                console.log("app onMounted");
            })
            onUpdated(()=>{
                console.log("app onUpdated");
            })

            onUnmounted(()=>{
                console.log("app onUnmounted");
            })
            return{
                counter,
                increase
            }
        }
    }
</script>

<style scoped>

</style>