<template>
    <div></div>
   
</template>

<script>
import mitter from "./utils/eventbus"
    export default {
        methods: {   
        },
        data() {
            return {
            }
        },
        // 生命周期函数 监听Aboutme
      created() {
            mitter.on("why",(info)=>{
                console.log(info);
            });
            // 监听所有
            mitter.on("*",(type,info)=>{
                console.log("* listener",type,info);
            })
      },
    }
</script>

<style scoped>

</style>