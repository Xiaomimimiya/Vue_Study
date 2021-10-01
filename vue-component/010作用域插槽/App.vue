<template>
    <div >
        <!-- 作用域插槽
            <child-cpn-vue>
              {{}} 在这里只能调用App.vue里面的数据
           不能调用child里面的 
           <button>hhh</button>
        </child-cpn-vue> 
        -->
    <show-names-vue :names="names">
        <!-- slotPros名称可以自定义 -->
        <template v-slot="slotProps">
            <button>{{slotProps.item}}</button>
        </template>
            <!-- 绑定名称 -->
          <template v-slot:xiaomi="slotname">
            <span>{{slotname.item}}-{{slotname.index}}</span>
        </template>
    </show-names-vue>
    </div>
</template>

<script>
import ChildCpnVue from "./ChildCpn.vue"
import ShowNamesVue from "./ShowNames.vue"
    export default {
        components:{
            ChildCpnVue,
            ShowNamesVue
        },
        data() {
            return {
                names:["xiaomi",123,"wqeq","ewfe","we"]
            }
        },
    }
</script>

<style scoped>

</style>