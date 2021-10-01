<template>
    <div>
        <h2>当前计数:{{counter}}</h2>
        <counter-operation @add="addOne"
                           @sub="subOne" 
                           @add_ns="add_Num">
        </counter-operation>
    </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue"

    export default {
        components:{
            CounterOperation,
        },
        data() {
            return {
                counter:100
            }
        },
        methods: {
            addOne(){
                this.counter++
            },
            subOne(){
                this.counter--
            },
            add_Num(number){
                this.counter+=number
            }
        },
    }
</script>

<style scoped>

</style>