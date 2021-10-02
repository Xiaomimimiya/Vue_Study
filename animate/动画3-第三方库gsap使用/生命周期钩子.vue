<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>   

    <transition  @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @afterLeave="afterLeave">
        <!-- 1.47 -->
        <h2 v-if="isShow">hello world</h2>
        
    </transition>
   
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isShow: true
      }
    },
     methods: {
      beforeEnter() {
        console.log("beforeEnter");
      },
      enter() {
        console.log("enter");
      },
      afterEnter() {
        console.log("afterEnter");
      },
      beforeLeave() {
        console.log("beforeLeave");
      },
      leave() {
        console.log("leave");
      },
      afterLeave() {
        console.log("afterLeave");
      }
    }
  }
</script>

<style scoped>
   
</style>