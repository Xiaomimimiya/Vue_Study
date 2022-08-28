<template>
    <div class="app">
        <nav-bar>
            <!-- 每个插槽会插入三个 -->
            <!-- <a href=""></a>
            <button></button>
            <input type="text"> -->
            
            <!-- 根据命名的插槽进行使用   v:slot:-->
            <template v-slot:left >
                <button>我是left按钮</button>
            </template>

            <template v-slot:center >
                <button>我是center按钮</button>
            </template>

            <template v-slot:right >
                <button>我是right按钮</button>
            </template>
            
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    export default{
        components:{
            NavBar
        }
    }
</script>

<style scoped>
     body{
        margin: 0;
        padding: 0;
    }
</style>