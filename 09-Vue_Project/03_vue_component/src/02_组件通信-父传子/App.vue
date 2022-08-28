<template>
    <!-- 父传子 -->
    <show-info name="xiaomi" :age="17" :height="109"></show-info>
    <!-- 在age、height前面加上： 则变成字符串类型的数组 -->
    <show-info name="xiaomiya" :age="18" :height="119"></show-info>

    <!-- <show-info showMessage="我是传递的message"></show-info> -->
    <!-- 大小写转换为驼峰 -->
    <show-info show-message="我是传递的message"></show-info>
</template>

<script>
import showInfo from './components/showInfo.vue';    
    export default{
        components:{
            "show-info":showInfo
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    
</style>