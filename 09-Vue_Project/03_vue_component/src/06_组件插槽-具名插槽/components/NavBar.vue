<template>
    <div class="nav-bar">
        
        <div class="left">
            <!-- 给插槽命名 name=left ======> 具名插槽 -->
            <slot name="left">left</slot>
        </div>

        <div class="center">
            <slot name="center">center</slot>
        </div>

        <div class="right">
            <slot name="right">right</slot>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
   
    .nav-bar{
        width: 400px;
        display: flex;
      

        text-align: center;
        line-height: 44px;

        margin: 0 auto;
    }
    .left{
        width: 100px;
        background-color: rgb(139, 88, 88);
    }
    .center{
        width: 200px;
        background-color: rgb(78, 70, 70);
    }
    .right{
        width: 100px;
        background-color: rgb(65, 59, 148);
    }
</style>