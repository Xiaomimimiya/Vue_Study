<template>
    <div>
        <h2>Hello Plugins</h2>
    </div>
</template>

<script>
import { getCurrentInstance } from "@vue/runtime-core"
    export default {
        setup(props) {
            const instance = getCurrentInstance();
            console.log(instance.appContext.config.globalProperties.$name);
        },
        
    }
</script>

<style scoped>

</style>