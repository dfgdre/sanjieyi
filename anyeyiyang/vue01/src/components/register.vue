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
          <input :type="checked?'text':'password'" placeholder="密码">
          <div class="want_switch">
            <van-switch v-model="checked" size="0.16rem" active-color="#07c160" />
          </div>
        </div>
        <div class="register_add_three_qyh">
          <input type="number" placeholder="验证码" class="yanzhengma">
          <div class="yanzhengma_change pull-right">
            <p>看不清</p>
            <p @click="post_data">换一张</p>
          </div>
          <img :src="img" alt=""class="pull-right">
          <div class="clearfix"></div>
        </div>
        <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
        <p class="login_tips">注册过的用户可凭账号密码登录</p>
        <button class="btn_tijiao"><router-link :to="{path: ''}" class="btn_a">注册</router-link></button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
    import All_head from "./all_head";
    export default {
      name: "register",
      data(){
        return {
          checked: false,
          img:""
        }
      },
      components: {All_head},
      mounted(){
        this.$refs.register.style.height = window.innerHeight+"px";
        this.post_data();
      },
      methods: {
        post_data(){
          Vue.axios.post('https://elm.cangdu.org/v1/captchas',{}).then((result)=>{
            //后台传来的值存在result的data里面
            console.log(result.data);
            this.img=result.data.code;
          }).catch((error)=>{
            console.log(error.data);
          })
        }
      },
      computed:{}
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
    margin-top: 0.14rem;
  }
  .register .register_add_qyh>div{
    padding: 0.224rem;
    padding-bottom: 0.144rem;
    padding-top: 0.144rem;
    background-color: white;
    margin-bottom: 1px;
  }
  .register input{
    width: 50%;
  }
  .register .want_switch{
    text-align: right;
    display: inline-block;
    width: 48%;
  }
  .register .yanzhengma{
  }
  .register img{
    width: 5rem;
  }
  .register .yanzhengma_change{
      margin-left: 1rem;
  }
  .register .yanzhengma_change>p{
    font-size: 1rem;
  }
  .register .yanzhengma_change>p:nth-last-of-type(1){
    color: #3b95e9;
  }
  .register .login_tips{
    font-size: 0.7rem;
    color: red;
    padding: 0.8rem 1rem;
    line-height: 0.7rem;
  }
  .register .btn_tijiao{
    margin: 0 auto;
    width: 90%;
    display: block;
    height: 3rem;
    border-radius: 0.3rem;
    background-color: #4cd964;
  }
  .register .btn_a{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    color: white;
  }
</style>
