<template>
    <div>
        <button @click="message++">修改message</button>
        {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message:10
            }
        },
        // 生命周期的基本函数
        beforeCreate() {
            console.log("beforeCreate")
        },
        created() {
            console.log("created")
        },
        beforeMount() {
            console.log("beforeMount")
        },
        mounted() {
             console.log("mounted")
        },
        beforeUnmount() {
            console.log("beforeUnmount")
        },
        unmounted() {
               console.log("Unmounted")
        },
        beforeUpdate() {
             console.log("beforeUpdate")
        },
        updated() {
            console.log("update")
        },
        activated() {
            console.log("activated")
        },
        deactivated() {
             console.log("deactivated")
        },
        
    }
</script>

<style scoped>

</style>