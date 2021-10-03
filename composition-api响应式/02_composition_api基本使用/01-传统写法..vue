<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter:0
            }
        },
        methods: {
            increase(){
                return this.counter++
            },
            decrease(){
                return this.counter--
            },
        },
    }
</script>

<style scoped>

</style>