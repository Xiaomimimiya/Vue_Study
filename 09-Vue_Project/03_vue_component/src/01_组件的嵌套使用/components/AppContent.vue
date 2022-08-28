<template>
   <div class="content">

      <div class="banner">轮播图</div>

      <app-content-list></app-content-list>
    </div>
    
</template>

<script>
    import AppContentList from './AppContentList.vue';
export default {
  components:{
        AppContentList
    }
}
</script>

<style scoped>
  .content{
    background-color: rgb(177, 69, 69);
  }
</style>