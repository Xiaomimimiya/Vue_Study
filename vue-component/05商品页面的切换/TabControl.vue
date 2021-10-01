<template>
    <div class="tab-control">
        <div class="tab-control-items" 
        :class="{active:currentindex===index}"
        v-for="(title,index) in titles" 
        :key="title"
        @click="itemclick(index)">
        <span>{{title}}</span>
      </div>
    </div>
</template>

<script>
    
    export default {
        emits:["titleclick"],
        props:{
            titles:{
            type:Array,
            default(){
                retutn [""]
                }
            }
        },
        data() {
            return {
                currentindex:0
            }
        },
        methods: {
            itemclick(index){
               this.currentindex=index;
               this.$emit("titleclick",index);
            }
        },
    }
</script>

<style scoped>
 .tab-control{
        display: flex;
    }
.tab-control-items{
    flex:1px;
    text-align:center;
}
.tab-control-items.active{
    color:red;
}
.tab-control-items.active span{
    border-bottom: 5px solid red;
    padding: 5px;
}
</style>