<template>
    <all_head>
      <template v-slot:one>注册</template>
      <template v-slot:two><p class="city_name">郑州</p></template>
      <template v-slot:three><p  class="switch">切换城市</p></template>
    </all_head>
</template>

<script>
    import All_head from "./all_head";
    export default {
        name: "city_position",
      components: {All_head}
    }
</script>

<style scoped>
.switch{
  font-size:0.14rem;
  margin-right: -0.05rem;
}
  .city_name{
    font-size: 0.2rem;
    font-weight: 900;
  }
</style>
