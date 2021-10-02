<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>   
      
      <!-- animate 用法2 -->
      <!-- 自定义属性class+anmite内置方法 -->
      <!-- 在css里面对里kai animate_flip做反转 -->
    <transition enter-active-class="animate__animated animate__zoomInUp"
                leave-active-class="animate__animated animate__flip">
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
    }
  }
</script>

<style scoped>
    /* class的反转 */
    .animate__flip{
        animation-direction: reverse;
    }
    /* animate 用法1 */
    /* .why-enter-active{
        animation: rotateIn 1s ease-in;
    }
    .why-leave-active{
        animation: rotateIn 1s ease-in reverse;
    } */
</style>