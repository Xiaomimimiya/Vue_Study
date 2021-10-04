<template>
    <div>
      <h2 v-formate-time>{{date}}</h2>

    </div>
</template>

<script>
    export default {
       setup(props) {
          const date = 1633312865;

          
          return {
              date
            }
       }
    }

</script>

<style scoped>

</style>