<template>
    <div class="register" ref="register">
      <all_head>
        <template v-slot:one><router-link class="fanhui_qyh" :to="{path:'/position_Sir'}">0000</router-link></template>
        <template v-slot:two>111科技撒奥会计部的撒看不到卡布达开裆裤节哀顺变卡级别卡世界杯的凯撒</template>
        <template v-slot:three>111</template>
      </all_head>
      <div class="add_qyh">
        div
      </div>
    </div>
</template>

<script>
    import All_head from "./all_head";
    export default {
      name: "register",
      components: {All_head},
      mounted(){
        this.$refs.register.style.height = window.innerHeight+"px";
      }
    }
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .register .fanhui_qyh{
    color: white;
  }
</style>
