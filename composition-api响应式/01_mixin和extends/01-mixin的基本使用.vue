<template>
  <div>
   <h2>{{message}}</h2>
   <button @click="foo">按钮</button>
  </div>
</template>

<script>
// export default 导入方式
// import  demoMixin  from "./mixin/demoMixin"
// export const导入方式
import { demoMixin } from "./mixin/demoMixin"
  export default {
    // 对象混入
    mixins:[demoMixin],

    data() {
      return {
       title:"hello App.vue"
      }
    },
    methods: {
      test(){
        console.log("hello App.vue")
      }
    },
  }
</script>

<style scoped>

</style>