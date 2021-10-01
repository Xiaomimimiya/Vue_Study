<template>
    <div>
<home></home>
<button @click="addName">++++</button>
    </div>
</template>

<script>
import Home from "./Home"
import {computed} from "vue"
    export default {
        components:{
            Home
        },
        // provide:{
        //     name:"xiaomi",
        //     age:18
        // },
        // 如果需要传递App中data的数据 则需要将provide写成一个函数
        provide(){
            return{
            name:"xiaomi",
            age:18,
            // 调用computed 可以实时在子组件中更新
            length: computed(()=>this.name.length)
            }

        },
        data() {
            return {
                name:["2134",2134,2134]
            }
        },
        methods: {
            addName(){
                this.name.push("xiaomi")
            }
        },
    }
</script>

<style scoped>

</style>