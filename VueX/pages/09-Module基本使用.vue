<template>
    <div>
      <h2>Root-counter：{{$store.state.rootCounter}}</h2>
      <h2>Home-counter：{{$store.state.home.homeCounter}}</h2>
      <h2>Use-counter：{{$store.state.user.userCounter}}</h2>
      <button @click="increaseAction">+1</button>
     
    </div>
</template>

<script>
import { mapActions } from "vuex"
    export default {
      setup(props) {
        
        }
    }
</script>

<style scoped>

</style>