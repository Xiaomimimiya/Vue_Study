<template>
    <div>
        <h2>NavBar</h2>
        <button @cliclk="getParent">获取父组件的内容</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message:"navbar的message"
            }
        },
        methods: {
            SayHi(){
                console.log("hello nihao")
            },
            getParent(){
                console.log(this.$parent.message);
            }
        },
    }
</script>

<style scoped>

</style>