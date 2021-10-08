<template>
    <div>
        <h2>Home1：{{$store.state.counter}}</h2>
        <hr>
        <h2>Home：{{counter}}</h2>
        <h2>Home：{{name}}</h2>
        <h2>Home：{{age}}</h2>
    </div>
</template>

<script>
// 通过函数封装到hooks文件夹下 来导用
import { useState } from "../hooks/useState";
    export default {
      setup() {
        const storeState=useState(["counter","name","age","city"]);

        return {
            ...storeState
        }
      }
    }
</script>

<style scoped>

</style>