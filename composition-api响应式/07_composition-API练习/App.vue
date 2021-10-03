<template>
    <div>
        <!-- 案例1 -->
        <h2>count：{{count}}</h2>
        <h2>count*2：{{doubleCount}}</h2>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
        
        <!-- 案例4 -->
        <h2>{{data}}</h2>
        <button @click="changdata">改变</button>

        <!-- 案例2 -->
        <p class="content"></p>
        <div class="scroll">
            <div class="scroll-x">scroll-x {{parseInt(scrollX)}}</div>
            <div class="scroll-y">scroll-y {{parseInt(scrollY)}}</div>
        </div>

        <!-- 案例3 -->
        <div class="mouse">
            <div class="mouse-x">mouse-x {{parseInt(mouseX)}}</div>
            <div class="mouse-y">mouse-y {{parseInt(mouseY)}}</div>
        </div>

    </div>
</template>

<script>

// 计数器案例
import useCount from "./hooks/useCount"
// 更改网页 title案例
import userTitle from "./hooks/userTitle";
// Scroll 案例
import useScroll from "./hooks/useScroll";
// mouseposition案例
import useMouse from "./hooks/useMouse";
// 数据存储
import useLocalStorage from "./hooks/useLocalStorage";


    export default {
        setup() {
            // 计数器
            const { count,doubleCount,increase,decrease} = useCount();

            // 更改title
            const reftitle=userTitle();
            setTimeout(() => {
                reftitle.value="xiaomi"
            }, 2000);

            // 页面滚动
            const {scrollX,scrollY}=useScroll();

            // 鼠标滚动
            const {mouseX,mouseY} = useMouse();

            // 数据保存
            const data = useLocalStorage("info");
            const changdata=()=>{
                data.value="xiaoya"
            }
            return {
                count,
                doubleCount,
                increase,
                decrease,

                reftitle,

                scrollX,
                scrollY,

                mouseX,
                mouseY,

                data,
                changdata
               
    }
        }

    }
</script>

<style scoped>
    .content{
        width: 5000px;
        height: 4000px;
    }
    .scroll{
        position: fixed; 
        right: 30px;
        bottom: 30px;
    }
    .mouse{
        position: fixed; 
        right: 30px;
        bottom: 80px;
    }
</style>