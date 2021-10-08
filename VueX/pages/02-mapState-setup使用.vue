<template>
    <div>
        <h2>Home1：{{$store.state.counter}}</h2>
        <hr>
        <h2>Home：{{sCounter}}</h2>
        <h2>Home：{{sName}}</h2>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
    export default {
      setup() {
          const store = useStore();
          const sCounter = computed(()=>store.state.counter);
          const sName = computed(()=>store.state.name);
        return {
            sCounter,
            sName
        }
      }
    }
</script>

<style scoped>

</style>