<template>
    <div>
        <h2>about组件</h2>
        <button @click="counter++">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        // 绑定include  keep-alive
        name:"about",
        data() {
            return {
                counter:0
            }
        },
    }
</script>

<style scoped>

</style>