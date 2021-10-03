<template>
    <div>
        <h2>{{fullname}}</h2>
        <button @click="changname">修改姓名</button>
    </div>
</template>

<script>
import { ref,computed } from "@vue/reactivity";
    export default {
    // 使用setup函数替换掉原生options的computed
        setup(props) {
            const firstname=ref("Xiao");
            const lastname=ref("mi");
            // 引入内置的computed 代替原有的computed属性
            // 用法一：传入getter函数
            // const fullname=computed(()=>firstname.value+" "+lastname.value);

            // 用法二：传入getter和setter函数
            const fullname=computed({
                get:()=>firstname.value+" "+lastname.value,
                
                set(newvalue){
                    const names=newvalue.split(" ");
                    firstname.value=names[0];
                    lastname.value=names[1];
                    }
                }
            );
            const changname=()=>{
                fullname.value="mi mi";
            }

            return{
                fullname,
                changname
            }
        }
    }
</script>

<style scoped>

</style>