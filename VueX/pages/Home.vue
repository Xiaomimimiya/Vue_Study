<template>
    <div>
      <!-- 获取home.js中的getters  添加命名空间-->
      <h2>Home-Counter：{{homeCounter}}</h2>
    <h2>Home-Counter：{{doubleHomeCounter}}</h2>
      <button @click="increase">counter-mutation</button>
      <button @click="incrementAction">counter-mapaction</button>

      <hr>

    </div>
</template>

<script>
// import {mapActions,mapMutations,mapGetters,mapState} from "vuex"
import { createNamespacedHelpers} from "vuex"
import { useState, useGetters } from '../hooks/index'

// 指定home.js中的数据导入
const {mapActions,mapMutations,mapGetters,mapState} = createNamespacedHelpers("home");

    export default {
      computed:{
        // 写法一
        // ...mapState("home",["homeCounter"]),
        // ...mapGetters("home",["doubleHomeCounter"])
        // 写法二
        // ...mapState(["homeCounter"]),
        // ...mapGetters(["doubleHomeCounter"])
      },
      methods: {
        // 写法一
        // ...mapMutations("home",["increase"]),
        // ...mapActions("home",["incrementAction"])
        // 写法二
        // ...mapMutations(["increase"]),
        // ...mapActions(["incrementAction"])
      },
      setup(props) {
        const state = useState("home",["homeCounter"])
        // const rootGetters = useGetters(["doubleRootCounter"])
        const getters = useGetters("home", ["doubleHomeCounter"])

        const mutations = mapMutations(["increase"])
        const actions = mapActions(["incrementAction"])

        return {
          ...state,
          ...getters,
        
          ...mutations,
          ...actions
        }
      }
    }
</script>

<style scoped>

</style>