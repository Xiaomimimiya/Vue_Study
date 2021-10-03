<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue';

  export default {
    setup() {
        // 定义可响应式对象
        const info = reactive({
            name: "why1", 
            age: 18,
            friend:{
                name:"why2"
            }
        });
    

        // 侦听
        watch(()=>({...info}), (newinfo,oldinfo) => {
            console.log(newinfo,oldinfo);
        },{
            // 深度监听
            deep:true,
            // 立即执行
            immediate:true  
        })

      const changeData = () => {
        info.friend.name = "kobe";
      }

      return {
        changeData,
        info
      }
    }
  }
</script>

<style scoped>

</style>