<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script>
    export default {
        // 局部自定义指令
        // 全局自定义指令在main.js设置
        directives:{
          focus:{
              mounted(el) {
                  console.log("focus-mounted");
                  el.focus();
              },
          }
      },
    }
</script>

<style scoped>

</style>