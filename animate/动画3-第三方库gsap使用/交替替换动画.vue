<template>
  <div>
    <input v-model="keywords">
    <transition-group tag="ul" name="why" :css="false"
                      @before-enter="befor_enter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(item,index) in showName" :key="item" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap"
  export default {
    data() {
      return {
        names:["133","wfegb","q","egr","aac","cc","bbc","dd","eava"],
        keywords:""
      }
    },
    computed:{
      showName(){
        return this.names.filter(item => item.indexOf(this.keywords) !== -1 )
      }
    },
    methods: {
      befor_enter(el){
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el,done){
        gsap.to(el,{
          opacity:1,
          height:"1.5em",
          delay1:el.dataset.index*0.5,
          onComplete:done,
        })
      },
      leave(el,done){
          gsap.to(el,{
          opacity:0,
          height:0,
          delay1:el.dataset.index*0.5,
          onComplete:done,
        })
      }
    },
  }
</script>

<style scoped>
  /* .why-enter-from,
  .why.leave-to{
   opacity: 0;
  }
  .why-enter-active,
  .why-leave-active{
    transition: opacity 1s ease;
  } */
</style>