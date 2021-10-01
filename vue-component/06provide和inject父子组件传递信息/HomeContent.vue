<template>
    <div>
<h2>HomeContent</h2>
<h2>{{name}}</h2>
<h2>{{age}}</h2>
<h2>{{length}}</h2>
    </div>
</template>

<script>
    export default {
        inject:["name","age","length"]
    }
</script>

<style scoped>

</style>