<template>
  <h2>当前计数: {{ counter }}</h2>

  <!-- addClick 来自子组件AddCounter 传递过来的 事件 -->
  <add-counter @addClick="AddClick"></add-counter>
  
  <!-- subClick 来自子组件SubCounter 传递过来的 事件 -->
  <sub-counter @subClick="SubClick"></sub-counter>

</template>

<script>
import SubCounter from "./components/SubCounter.vue";
import AddCounter from "./components/AddCounter.vue";

export default {
  components: {
    SubCounter,
    AddCounter,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // counter来自于子组件的传递
    AddClick(counter) {
      console.log("click", counter);
      this.counter += counter;
    },
    // counter来自于子组件的传递
    SubClick(counter) {
      console.log("click", counter);
      this.counter -= counter;
    },
  },
};
</script>

<style scoped>
</style>