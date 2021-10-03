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
        const info = reactive({name: "why1", age: 18});
        const name = ref("why2");

        // 侦听
        watch([info,name], ([newinfo,newname],[oldinfo,oldname]) => {
            console.log(newinfo,newname,oldinfo,oldname);
        })

      const changeData = () => {
        info.name = "kobe";
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