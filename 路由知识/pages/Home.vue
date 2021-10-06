<template>
    <div>
        <!-- 在app.vue传参后 通过其内置的方法来获取 -->
    <h2>Home：{{$route.query.name}}-{{$route.query.age}}</h2>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <!-- Home下的嵌套路由 -->
        
        <router-link to="/home/message">消息</router-link>
        <router-link to="/home/product">商品</router-link>
        <router-link to="/home/homemonent">状态</router-link>
        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>