<template>
    <div>
        <!-- 实现方法1 -->
        <!-- <input :value="modelValue" @input="btnclick"> -->

        <!-- 实现方法2 计算属性 -->
        <input type="text" v-model="value">
    </div>
</template>

<script>
    export default {
        props:{
            modelValue:String
        },
        // 
        computed:{
            value:{
            get(){
                return this.modelValue
            },
            set(value){
                 this.$emit("update:modelValue",value)
            }
            }
        },
        emits:["update:modelValue"],
        methods: {
         btnclick(event){
             this.$emit("update:modelValue",event.target.value)
         }
     },   
    }
</script>

<style scoped>

</style>