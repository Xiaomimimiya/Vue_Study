<template>
  <div class="infos">
    <h2>姓名：{{ name }}</h2>
    <h3>年龄：{{ age }}</h3>
    <h4>身高：{{ height }}</h4>
    <h4>朋友：{{ friends }}</h4>
    <h4>ShowMessage:{{showMessage}}</h4>
  </div>
</template>

<script>
export default {
    // 获取父组件传递过来的属性

    // 通过props来进行获取传递过来的属性

    // 1、props数组语法 
    // 1.1 不能对类型进行验证  
    // 1.2 没有默认值
    // props:["name", "age", "height"],

    // 2、对象语法
    props:{
        name: {
            type: String,
            // 必传递
            // require:true,
            default:"默认Name"
        },

        age: {
            type: Number,
            default: 0
        },

        height:{
            type: Number,
            default: 200
        },

         // 对象 default 必须使用函数的形式
        friends:{
            type: Object,
           
            default:()=>({
                name: "james"
            })
        },
         // 数组 default 必须使用函数的形式
        hobbies:{
            type: Array,
            default:()=>
                ["篮球","rap", "唱跳"]
        },
        showMessage:{
            type: String,
            default: "我是showmessage"
        }
    },
    data(){
        return{

        }
    },
  

};
</script>

<style scoped>
    .infos{
        background-color: rgb(98, 98, 161);
        margin-top: 10px;
    }
</style>