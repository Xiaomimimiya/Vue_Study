<template>
    <div class="sub">
        <button @click="subClick(1)">-1</button>
        <button @click="subClick(5)">-5</button>
        <button @click="subClick(10)">-10</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
        // 最好对发出去的事件进行注册 然后和实际发出去的保持一致
        emits:["subClick"],
        methods:{
            subClick(counter){
                 // 通过自定义事件来将数据发送出去 到父元素
                // "subClick": 自定义事件名称
                //  counter:  传递的参数
                this.$emit("subClick", counter)
            }
        }
    }
</script>

<style scoped>
    
</style>