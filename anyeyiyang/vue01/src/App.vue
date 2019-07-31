<template>
  <div id="app">
    <Header_c></Header_c>
    <router-view></router-view>
  </div>
</template>

<script>
import Header_c from "./components/Header-c";
export default {
  name: 'App',
  components: {Header_c},
}
</script>

<style>

</style>
