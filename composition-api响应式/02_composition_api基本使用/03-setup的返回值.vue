<template>
    <div>
        Home Page
        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
        <h2>当前计数：{{counter}}</h2>
        <button @click="increase">+1</button>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        }, 
        setup() {
            let counter=100
            // 通过局部函数来定义点击事件
            const increase = ()=>{
                counter++;
                console.log(counter);
            }
            return{
                title:"hello home",
                counter,
                // 调用点击事件
                increase,
            }
        }
    }
</script>

<style scoped>

</style>