<template>
    <div id="app">
        <!-- router内置的组件 -->
        <!-- to 定向跳转 -->
        <!-- active-class更改默认class -->
        <!-- 内部可以添加多个类型的内容 -->

        <!-- 类似于插槽 --> 
        <!-- props: route对象 -->
        <!-- custom 使其自定义 不会跳转 需要组件自己使用导航函数跳转  -->
        <router-link to="/home" v-slot="props" custom>
            <!-- props: href 跳转的链接 -->
        <button @click="props.navigate">{{props.href}}</button>
            <!-- props: navigate导航函数 -->
        <button @click="props.navigate">home</button>
            <!-- props: isActive 是否当前处于活跃的状态 -->
        <span :class="{'active': props.isActive}">{{props.isActive}}</span>
            <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
        <span :class="{'active': props.isActive}">{{props.isExactActive}}</span>
        <!-- <p>{{props.route}}</p> -->
        </router-link>

        <router-link to="/categlory" >分类</router-link>
        <router-link to="/about" >关于</router-link>
        <!-- 动态绑定路由匹配 -->
        <!-- about是在index路由设置中定义的name和id -->
        <router-link to="/user/xiaomi/111" >用户</router-link>


        <button @click="ToHome">首页</button>
        <button @click="ToAbout">关于</button>
        <button @click="GoBack">返回</button>
        
        <router-view></router-view>
        <!-- 路由跳转页面显示 -->
        <!-- 增加动画 与作用域插槽的使用 -->
        <!-- <router-view v-slot="props">
            <transition name="animate"> -->
                <!-- keep-alive缓存 -->
                <!-- <keep-alive>
                <component :is="props.Component"></component>
                </keep-alive>
            </transition> -->
        <!-- </router-view> -->
    </div>
</template>

<script>
import { useRouter } from "vue-router"
import NavBarVue from "./components/Nav-bar.vue";
    export default {
        name:"App",
        components:{
            NavBarVue
        },
        // 使用methods来实现 点击首页 按钮 页面跳转
        methods: {
           ToHome(){
            //获取router
            // 通过push 跳转到指定界面
            // this.$router.push("/home");
            this.$router.push({
                path:"/home",
                // 传入多个参数 在home.vue中可以获取其参数内容
                query:{
                    name:"why",
                    age:"18"
                }
            });
            },
        },
        // 使用setup来实现 点击关于 按钮 页面跳转
        setup() {
            const router = useRouter();
            const ToAbout = ()=>{
                router.push("/about")
            }
            // 返回按钮
            const GoBack=()=>{
                router.go(-1)
            }
            return {
               ToAbout,
               GoBack
           }
        }

    }
</script>

<style scoped>
    .animate-enter-from,
    .animate-leave-to{
      opacity: 0;
  }
    .animate-enter-active,
    .animate-leave-active{
      transition: opacity 1s ease;
  }

</style>