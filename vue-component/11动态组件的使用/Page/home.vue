<template>
    <div @click="divclick">
        <h2>Home组件</h2>
        <h2>{{name}}-{{age}}</h2>
        <button @click="counter++">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        // 绑定include  keep-alive
        name:"home",
        data() {
            return {
                counter:0
            }
        },
        props:{
            name:{
                type:String
            },
            age:{
                type:String
            }
        },
        emits:["pageclick"],
        methods: {
            divclick(){
                this.$emit("pageclick");
            }
        },
    }
</script>

<style scoped>

</style>