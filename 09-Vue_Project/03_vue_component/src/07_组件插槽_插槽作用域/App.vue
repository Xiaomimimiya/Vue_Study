<template>
  <div class="app">
    <div class="bar">
      <tabbar :names="titles" @showItem="itemClick"> </tabbar>
      <h2>{{ pageData[currentIndex] }}</h2>

      <tabbar :names="titles" @showItem="itemClick">
        <!-- 作用域插槽 使用 -->
        <template v-slot:default="props">
          <button>{{ props.item }}</button>
        </template>
      </tabbar>
     
      <tabbar :names="titles" @showItem="itemClick">
        
        <!-- 作用域插槽 使用 -->

        <template v-slot:default="props">
          <a href="#">{{ props.item }}</a>
        </template>
      </tabbar>
    
    </div>
  </div>
</template>

<script>
import tabbar from "./components/tabbar.vue";
export default {
  components: {
    tabbar,
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      pageData: ["衣服列表", "鞋子列表", "裤子列表"],
      currentIndex: 0,
    };
  },
  props: [],
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
</style>