<template>
    <div>
    <button @click="counter_plus">+1</button>
    <button @click="counter_mins">-1</button>
    <input type="text" v-model.number="number">
    <button @click="add_n">+n</button>
    </div>
</template>

<script>
    export default {
        // 进行事件的绑定 才能够使得父组件监听到子组件触发的事件
        // emits:["add","sub","add_ns"],
        // 对象的写法是为了对传入的参数做一个验证
        emits:{
            add:null,
            sub:null,
            add_ns:(number)=>{
                if (number>10) {
                    return false
                }
                return true
            }
        },
        data() {
            return {
                number:0
            }
        },
        methods: {
            counter_plus(){
               console.log("+1");
               this.$emit("add");
            },
            counter_mins(){
                console.log("-1");
                 this.$emit("sub");
            },
            add_n(){
                this.$emit("add_ns",this.number);
            }
            
        },
    }
</script>

<style scoped>

</style>