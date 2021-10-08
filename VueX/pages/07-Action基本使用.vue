<template>
    <div>
      <h2>Home-counter：{{$store.state.counter}}</h2>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
</template>

<script>
    export default {
      methods: {
        increase(){
          // 调用action
          this.$store.dispatch("increaseAction")
        },
        decrease(){
          this.$store.dispatch("decreaseAction")
        }
      },
      
    }
</script>

<style scoped>

</style>