<template>
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="plus">+</button>

    <product-item></product-item>
</template>

<script>

// 导入外部的组件进行局部注册
import productItem from "./product.vue"

// 默认导出
export default {

    // 局部注册
    components:{
        "product-item":productItem,
    },
    data(){
        return{
            message:"Hello Vue",
            counter: 0
        }
    },
    methods:{
        plus(){
            this.counter++
        }
    }
}
</script>

<style scoped>
    h2{
        color: red;
    }
</style>