<template>
    <div>
      <h2>Root-counter：{{$store.state.rootCounter}}</h2>
      <h2>Home-counter：{{$store.state.home.homeCounter}}</h2>
      <h2>Use-counter：{{$store.state.user.userCounter}}</h2>
      <hr>
      <!-- 获取home.js中的getters  添加命名空间-->
      <h2>Home-getters：{{$store.getters["home/doubleHomeCounter"]}}</h2>

      <button @click="Home_increase">Home-counter:+1</button>
      <button @click="homeIncrementAction">Home-counter:+2</button>
    </div>
</template>

<script>

    export default {
      methods: {
        Home_increase(){
          // 对home模块中mutations方法进行提交
          this.$store.commit("home/increase")
        },
        homeIncrementAction() {
          this.$store.dispatch("home/incrementAction")
      }
      },
    }
</script>

<style scoped>

</style>