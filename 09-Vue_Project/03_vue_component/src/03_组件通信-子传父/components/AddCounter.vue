<template>
    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(5)">+5</button>
        <button @click="btnClick(10)">+10</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
        // 最好在其进行定义 然后和发出去的保持一致
        emits:["addClick",],
        methods:{
            // 通过参数传递来获取其点击 加 1 5 10
            btnClick(counter){
                // 通过自定义事件来将数据发送出去 到父元素
                // "addClick": 自定义事件名称
                //  counter:  传递的参数
                this.$emit("addClick",counter)
            }
        }
    }
</script>

<style scoped>
    
</style>