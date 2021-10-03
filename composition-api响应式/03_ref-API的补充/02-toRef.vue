<template>
    <div>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
import { reactive,toRef} from "@vue/reactivity";
    export default {
        setup(props) {
            const info=reactive({name:"why",
                                age:20});
        
            // toRef是对单个内容进行结构
            const {name}=info;
            const age=toRef(info,"age");

            const changeAge = ()=>{
                age.value++
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