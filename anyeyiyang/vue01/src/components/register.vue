<template>
    <div class="register" ref="register">
      <all_head>
        <template v-slot:one><router-link class="fanhui_qyh" :to="{path:'/position_Sir'}">0000</router-link></template>
        <template v-slot:two>注册</template>
        <template v-slot:three>111</template>
      </all_head>
      <div class="register_add_qyh">
        <div class="register_add_one_qyh">
          <input type="text" placeholder="账号">
        </div>
        <div class="register_add_two_qyh">
          <input type="text" placeholder="账号">
          <van-switch v-model="checked" size="1rem" active-color="#07c160" inactive-color="#f44"/>
        </div>
        <div class="register_add_three_qyh">
          <input type="text" placeholder="账号">
        </div>
      </div>
    </div>
</template>

<script>
    import All_head from "./all_head";
    export default {
      name: "register",
      data(){
        return {
          checked: true
        }
      },
      components: {All_head},
      mounted(){
        this.$refs.register.style.height = window.innerHeight+"px";
      },
      methods: {}
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
  .register .register_add_qyh{
    margin-top: 0.5rem;
  }
  .register .register_add_qyh>div{
    padding: 1.4rem;
    padding-bottom: 0.9rem;
    padding-top: 0.9rem;
    background-color: white;
    margin-bottom: 1px;
  }
</style>
