<template>
    <div>
        <h2>{{count}}</h2>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
import { inject } from "@vue/runtime-core"
    export default {
        setup() {
            const name=inject("name");
            let count = inject("count");

            return{
                name,count
            }
        }
    }    
</script>

<style scoped>

</style>