<template>
    <div>
        <template v-for="(item,index) in names" :key="item">
            <!-- 作用域绑定 -->
           <slot :item="item" :index="index"></slot>
        </template>

         <template v-for="(item,index) in names" :key="item">
            <!-- 作用域绑定 -->
           <slot name="xiaomi" :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
    export default {
        props:{
            names:{
                type:Array,
                default:()=>[]
            }
            
        }
    }
</script>

<style scoped>

</style>