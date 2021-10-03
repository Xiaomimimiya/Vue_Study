<template>
    <div>
        Home Page
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        }, 
        /*
        两个参数位置固定 名字可以自定义
        参数1.props父组件传过来的属性
        */
        // setup(props,context) {
        setup(props,{attrs,slot,emit}) {
            // 不能通过this.message来获取
            console.log(props.message);
            console.log(attrs.id,attrs.class);
            console.log(emit);
            console.log(slot);
        }
    }
</script>

<style scoped>

</style>