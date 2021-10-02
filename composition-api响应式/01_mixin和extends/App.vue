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
    //可以使用vue内置的方法来注册全局mixin 在main里面进行注册

    // app.mixin({
    //     data() {
    //         return {}
    //     },
    //     methods: {

    //     },
    //     created() {
    //         console.log("全局组件create注册")
    //     },
    // })

    data() {
      return {
       title:"hello App.vue",
      //  data 中的数据与mixin发生重名冲突时  保留组件自身的数据  ====> hello app
       message:"hello App"
      }
    },
    methods: {
      test(){
        console.log("hello App.vue")
      }
    },
    // 生命周期重复时 都会被调用
    created() {
      console.log("执行了App.vue")
    },
  }
</script>

<style scoped>

</style>


