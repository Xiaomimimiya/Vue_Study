<template>
    <div>
        <h2 ref="name">哈哈哈</h2>  
    </div>
</template>

<script>
import { ref,watchEffect } from "vue";

    export default {
        
        setup(props) {
            const name=ref(null);
            // console.log(name.value); //null

            // 为了获取到ref的值 ===>方法
            watchEffect(()=>{
                console.log(name.value);
            },{
                flush:"post"
            })
            return {
                name
            }
    }
    
}
</script>

<style scoped>

</style>