<template>
    <div>
        <input type="text" v-model="message">
        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
        <p>{{desc}}</p>
        <button @click="btnclick">按钮</button>
    </div>

</template>
<script>

export default({
    data() {
        return {
            message: "hello world",
            title: "haaaa",
            desc: "xixixi"
            }
        },
    methods: {
        btnclick() {
            console.log("按钮发生点击");
            }
        }

});
</script>

<style scoped>

</style>