<template>
    <div class="header">
      <p>这是header标签</p>
      <button @click="btn_c">按钮</button>
      <router-link :to="{path:'/a'}">百度</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header_c",
      methods:{
          btn_c(){
            alert("hadshhdahda")
          }
      }
    }
</script>

<style scoped>

</style>
