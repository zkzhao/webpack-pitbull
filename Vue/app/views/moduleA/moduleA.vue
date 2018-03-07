<template>
  <div><p>fsdfsdlkjhfjskldhfl99999999</p>
  <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/bar">Go to Bar</router-link>
  <router-view></router-view>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        checking: false
      }
    }
  }
</script>

<style>
    p{
       font-size: 40px;
    }
</style>
