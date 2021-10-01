<template>
<!-- 导航栏 -->
    <div class="NavBar">
        <!-- 使用具名插槽 意思就是给每个插槽赋上姓名 -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot> 
        </div>
        <div  class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .NavBar{
        display: flex;
    }
    .left,.right,.center{
        height: 44px;
    }
    .left,.right{
        width: 80px;
        background-color: red;
    }
    .center{
        flex:1px;
        background-color: blue;
        text-align:center;
    }
</style>