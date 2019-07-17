<template>
  <div>
    Test
    <h1>id</h1>
    {{id}}
  </div>
</template>

<script>
  export default {
    mounted() {
      this.id = this.$route.query.id
      // getObjChatrs({id})
      // .then(res=>{

      // })
    },
    data() {
      return {
        id:''
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>