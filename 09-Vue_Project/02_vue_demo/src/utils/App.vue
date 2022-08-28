<template>
  <h2 class="title">{{ message }}</h2>
  <app-header></app-header>
</template>

<script>
import AppHeaderVue from "@/components/AppHeader.vue";
export default {
  components: {
    "app-header": AppHeaderVue,
  },
  data() {
    return {
      message: "App.vue title ",
    };
  },
};
</script>

<style scoped>
  .title{
    color: red;
  }
</style>
