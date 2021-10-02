<template>
  <div class="app">
   
      <input type="number" step="100" v-model="counter">
      <h2>
        <h2>{{showcounter.toFixed(0)}}</h2>
      </h2>

  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        counter:0,
        showcounter:0
      }
    },
    // computed:{
    //  ShowNumber(){
    //    return this.showcounter.toFixed(0)
    //  }
    // },
    watch:{
      counter(newvalue){
        gsap.to(this,{duration:1,showcounter:newvalue})
      }
    }
    
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
</style>