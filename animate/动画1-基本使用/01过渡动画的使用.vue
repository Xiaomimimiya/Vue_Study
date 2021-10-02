<template>
    <div>
        <button @click="isaction=!isaction">显示/隐藏</button>

        <transition name="xiaomi">
              <h2 v-if="isaction">hello world</h2>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isaction:true
            }
        },
        
    }
</script>

<style scoped>
    .xiaomi-enter-from
    .xiaomi-leave-to{
        opacity: 1;
    }
    .xiaomi-enter-to
    .xiaomi-leave-from{
        opacity: 1;
    }
    .xiaomi-enter-active,
    .xiaomi-leave-active{
        transition: opacity 2s ease;
    }
</style>