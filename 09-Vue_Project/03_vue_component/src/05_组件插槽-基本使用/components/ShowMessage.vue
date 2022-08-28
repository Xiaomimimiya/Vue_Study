<template>
   <h2>{{titles}}</h2>
   <div class="content">
        <!-- 设置插槽 -->
    <slot>
        <p>我是插槽默认内容</p>
    </slot>
   </div>
</template>

<script>
    export default{
        props:{
            titles:{
                type: String,
                default: ""
            },
          
        }
    }
</script>

<style scoped>
    
</style>