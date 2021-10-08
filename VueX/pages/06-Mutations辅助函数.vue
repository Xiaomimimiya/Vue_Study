<template>
    <div>
      <h2>Home-counter：{{$store.state.counter}}</h2>
      <button @click="increase">+1</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex"
    export default {
      methods: {
        // 也可以使用mapMutations 将mutation直接映射到Home.vue
       ...mapMutations(["increase","decrease"])
      },
    }
</script>

<style scoped>

</style>