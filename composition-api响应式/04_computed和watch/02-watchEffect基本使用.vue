<template>
    <div>
        <h2>{{name}}-{{age}}</h2>
        <button @click="changname">修改姓名</button>
        <button @click="changage">修改年龄</button>
    </div>
</template>

<script>
import {ref} from "@vue/reactivity";
import { watchEffect} from "@vue/runtime-core";
    export default {
        
        setup(props) {
          // watchEffect会自动收集响应式依赖
            const name=ref("xiaomi");
            const age=ref(18);

            // 自动监听 且会立即自动调用
            const stop= watchEffect((onInvalidate)=>{

                const timer=setTimeout(() => {
                    console.log("网络请求成功");
                }, 2000);

                // 在这个函数中清除额外的副作用
                onInvalidate(()=>{
                    clearTimeout(timer);
                    console.log("-----");
                });

                console.log(name.value,age.value);
            })
            // 停止监听设置 就是进行设置stop

            const changname= ()=> {
                name.value="xiaomiya";
            }
            const changage=()=>{
                age.value++;
                if(age.value>30){
                    stop();
                }
            }
            
            return{
                name,
                age,
                changage,
                changname
          }
        }
    }
</script>

<style scoped>

</style>