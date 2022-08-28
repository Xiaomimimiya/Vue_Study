<template>
  <div>
    <h2 class="title_vue">{{ title }}</h2>
    <p class="content">我是内容</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是vue",
    };
  },
};
</script>


<style>
    .title_vue{
        color: red;
        font-size: 40px;
    }
    .content{
        font-size: 30px;
        color: blue
    }
</style>
