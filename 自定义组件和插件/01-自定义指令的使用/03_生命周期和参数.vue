<template>
    <div>
        <!-- <input type="text" v-focus > -->

        <button v-if="counter<3" v-why.aaa.bbb="'whynot'" @click="increase">增加</button>
        {{counter}}
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
    export default {
        directives:{
          why:{
                created(el,bindings) {
                    console.log("created");
                    console.log(bindings);
                    console.log(bindings.value);
                    console.log(bindings.modifiers);
                },
                mounted(el) {
                    console.log("mounted");
                    
              },
                unmounted(el) {
                    console.log("unmounted");
                   
              },
                beforeMount(el) {
                    console.log("beforemounted");
                  
              },
                beforeUpdate(el) {
                    console.log("beforeUpdate");
                   
                },
                updated(el) {
                    console.log("update");
                   
                },
          }
        },

       setup(props) {
           const counter=ref(0);
           const increase=()=> counter.value++;
           return{
               counter,
               increase
           }
       }
    }
</script>

<style scoped>

</style>