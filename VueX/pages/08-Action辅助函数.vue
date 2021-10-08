<template>
    <div>
      <h2>Home-counter：{{$store.state.counter}}</h2>
      <button @click="increaseAction">+1</button>
      <button @click="decreaseAction">-1</button>
       
      <button @click="add">+1</button>
      <button @click="sub">-1</button>
    </div>
</template>

<script>
import { mapActions } from "vuex"
    export default {
      methods: {
        // 数组和对象两种基本写法
          // ...mapActions(["increaseAction","decreaseAction"]),
          // ...mapActions({
          //   add:"increaseAction",
          //   sub:"decreaseAction"
          // })
        },
        setup(props) {
          // 在composition中的使用
          const action1=mapActions(["increaseAction","decreaseAction"])
          const action2=mapActions({
            add:"increaseAction",
            sub:"decreaseAction",
          })
          return{
            ...action1,
            ...action2
          }
        }
    }
</script>

<style scoped>

</style>