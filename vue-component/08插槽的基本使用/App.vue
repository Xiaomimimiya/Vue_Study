<template>
    <div>
        <my-slot>
            <!-- 插槽插入例子1 -->
            <button>我是按钮</button>
        </my-slot>

        <my-slot>
            <!-- 插槽插入例子2 -->
           我就是个文本内容
        </my-slot>

         <my-slot>
            <!-- 插槽插入例子3 -->
           <my-button></my-button>
        </my-slot>

    </div>
</template>

<script>
import MySlot from "./MySlot.vue"
import MyButton from "./MyButton.vue"
    export default {
        components:{
            MySlot,
            MyButton
        }
    }
</script>

<style scoped>

</style>