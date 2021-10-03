<template>
    <div>
        Home Page
       <button @click="updateState">按钮</button>
      
    </div>
</template>

<script>
import { readonly,reactive } from "@vue/reactivity"
    export default {
     
        setup() {
            // 不管是普通对象 还是响应式对象 通过readonly调用后 都是不能将那些更改
            const info1={
                name:"why1"
            }
            const readonlyInfo1=readonly(info1);

            // 响应式对象
            const info2=reactive({
                name:"why2"
            })
            const readonlyInfo2=readonly(info2);

            const updateState = ()=>{
               readonlyInfo1.name="xiaomi"
               readonlyInfo2.name="xiaomi"
            // Set operation on key "name" failed: target is readonly
            }
            return{
                updateState
            }
        }
    }
</script>

<style scoped>

</style>