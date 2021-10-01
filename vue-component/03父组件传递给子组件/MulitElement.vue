<template>
    <h2>hello</h2>
    <h2>hello</h2>
    <!-- 多个根节点 必须指定绑定到哪一个节点中 -->
    <h2 :id="$attrs.id">hello</h2>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>