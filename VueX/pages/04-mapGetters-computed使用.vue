<template>
    <div>
        <h2>Home-counter：{{$store.state.counter}}</h2>
        <h2>Home-totalPrice：{{$store.getters.totalPrice}}</h2>
        <hr>
        <h2>{{nameInfo}}</h2>
        <h2>{{ageInfo}}</h2>
        <h2>{{cityInfo}}</h2>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
    export default {
      computed:{
        ...mapGetters(["nameInfo","ageInfo","cityInfo"]),
        // 也可以有对象的写法
        // ...mapGetters({
        //   nameInfo:"nameInfo",
        //   ageInfo:"ageInfo",
        //   cityInfo:"cityInfo"}
        //   )
      }
    }
</script>

<style scoped>

</style>