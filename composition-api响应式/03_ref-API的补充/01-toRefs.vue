<template>
    <div>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
import { reactive,toRefs } from "@vue/reactivity";
    export default {
        setup(props) {
            const info=reactive({name:"why",
                                age:20});
            // info解构 
            // reactive 对象的结构 使用refs 才能够使其变成响应式
            // 不使用refs 则不能修改 能够使其进行响应式
            const {name,age} = toRefs(info);
          
            const changeAge = ()=>{
                info.age++
            }
          return{
              name,
              age,
              changeAge

          }
        } 
    }
</script>

<style scoped>

</style>