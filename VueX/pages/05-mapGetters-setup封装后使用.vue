<template>
    <div>
        <h2>Home-counter：{{$store.state.counter}}</h2>
        <h2>Home-totalPrice：{{$store.getters.totalPrice}}</h2>
        <hr>
        <h2>{{nameInfo}}</h2>
        <h2>{{ageInfo}}</h2>
    </div>
</template>

<script>
import { useGetters } from "../hooks/useGetters"
    export default {
      setup() {
        const storeGetters = useGetters(["nameInfo","ageInfo","cityInfo"])
        return{
          ...storeGetters
        }
      }
    }
</script>

<style scoped>

</style>