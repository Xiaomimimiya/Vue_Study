<template>
    <div>
        <button @click="AboutClick">按钮点击</button>
    </div>
</template>

<script>
import mitter from "./utils/eventbus"
    export default {
        methods: {
            AboutClick(){
                console.log("About按钮点击");
                mitter.emit("why",{name:"xiaomi",age:18});
            }
        },
    }
</script>

<style scoped>

</style>