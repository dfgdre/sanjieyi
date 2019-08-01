<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  export default {
    name: 'App',
  }
</script>

<style>
  html{
    font-size: 16px;
    width: 100%;
    min-height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
