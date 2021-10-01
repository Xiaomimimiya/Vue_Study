<template>
<!-- 根节点继承非props的attribute方法  -->
    <h2 :class="$attrs">{{title}}</h2>
    <h2>{{content}}</h2>
</template>

<script>
    export default {
        // 注册事件 来使得父子传递 并且指定类型
        props:{
            title:String,
            content:String
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>

</style>