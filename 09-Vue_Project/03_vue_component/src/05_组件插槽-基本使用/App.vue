<template>
  <div class="app">
    <!-- 内容是按钮 -->
    <show-message titles="我是按钮插槽">
      <button>我是按钮</button>
    </show-message>

    <!-- 内容是超链接 -->
    <show-message titles="我是超链接插槽">
      <a href="https://www.baidu.com">百度一下</a>
    </show-message>
    
    <!-- 图片插槽 -->
    <show-message titles="我是图片插槽">
        <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nmY2o1MdUEMRBhFkRVxkyAHaGF?pid=ImgDet&rs=1">
    </show-message>

    <show-message titles="默认插槽"></show-message>
  </div>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue";
export default {
  components: {
    ShowMessage,
  
},
};
</script>

<style scoped>
</style>