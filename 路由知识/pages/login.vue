<template>
    <div>
        <button @click="loginClick">点击登录</button>
    </div>
</template>

<script>
import { useRouter } from "vue-router"
    export default {
        setup(props) {
            const router = useRouter();
            const loginClick=()=>{
                // 在本地存储进行缓存
                window.localStorage.setItem("token","xiaomi");

                router.push({
                    path:"/home",
                    component:()=>
                    import ("../pages/Home.vue")
                })
            }

            return {
                loginClick
            }
        }
    }
</script>

<style scoped>

</style>