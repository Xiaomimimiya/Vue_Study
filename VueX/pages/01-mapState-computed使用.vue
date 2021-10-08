<template>
    <div>
        <h2>Home：{{$store.state.counter}}</h2>
        <h2>Home：{{name}}</h2>
        <h2>Home：{{age}}</h2>
        <h2>Home：{{city}}</h2>
        <h2>Shome：{{Scounter}}</h2>
        <h2>Shome：{{Sname}}</h2>
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        computed:{
            fullname(){
                return "xiaomi";
            },
            // 通过数组的方式来展示vuex中定义的数据
            ...mapState(["counter","name","age","city"]),
            // 通过对象的方式来展示vuex中定义的数据
            // 自定义名称方式 可以避免和内部自定的计算属性名称发生冲突
            ...mapState({
                Scounter:state=>state.counter,
                Sname:state=>state.name,
            })

        }
    }
</script>

<style scoped>

</style>