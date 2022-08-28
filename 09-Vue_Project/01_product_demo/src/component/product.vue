<template >
    <h2>{{title}}</h2>
    <div class="price">商品价格：{{price}}</div>
    <div class="desc">商品描述：{{desc}}</div>
</template>

<script>
export default {
    data(){
        return {
            title: "小米手机",
            price: 20,
            desc: "关于小米手机的信息"
        }
    }
}
</script>

<style scoped>
    .price{
        font-size: 20px;
        color: red;
    }
    .desc{
        font-size: 15px;
        color: orange;
    }
</style>