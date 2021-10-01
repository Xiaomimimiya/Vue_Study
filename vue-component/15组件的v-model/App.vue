<template>
    <div>
        <!-- <input type="text" v-model="message">
        {{message}} -->

        <my-message-vue v-model="message"></my-message-vue>
        {{message}}
    </div>
</template>

<script>
import MyMessageVue from "./MyMessage.vue"
    export default {
        components:{
            MyMessageVue
        },
        data() {
            return {
                message:"hello world"
            }
        },
    }
</script>

<style scoped>

</style>