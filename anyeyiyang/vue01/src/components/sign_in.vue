<!--<template>-->
<!--<div class="gonde">-->
  <!--<all_head>-->
    <!--<template v-slot:one><p class=" glyphicon glyphicon-menu-left jiao" @click="hui"></p></template>-->
    <!--<template v-slot:two><p>密码登录</p></template>-->

  <!--</all_head>-->


  <!--<div class="kong"></div>-->
  <!--<div class="xiao">-->
    <!--<input  class="number" type="text" name="firstname" placeholder="账号">-->
  <!--</div>-->
  <!--<div class="xiao">-->
    <!--<input  class="number":type="checked?'password':'text'" placeholder="密码">-->

  <!--</div>-->
  <!--<div class="xiao">-->
    <!--<input  class="number" type="text"placeholder="验证码">-->
  <!--</div>-->
  <!--<p class="shi">温馨提示: 未注册过得账号，登录时将自动注册</p>-->
  <!--<p class="shi hei">注册过得用户可凭账号密码登录</p>-->
  <!--<div class="da"><div class="in"><span class="ti">登录</span></div></div>-->

  <!--<p class="xin">重置密码?</p>-->

<!--</div>-->

<!--</template>-->

<!--<script>-->
  <!--import Vue from 'vue';-->
  <!--import All_head from "./all_head";-->
    <!--export default {-->
        <!--name: "sign_in",-->
      <!--components: {All_head},-->
      <!--data(){-->
          <!--return{-->
            <!--checked:false-->

          <!--}-->
      <!--},-->
      <!--methods:{-->
        <!--hui(){-->
          <!--this.$router.push({path:"/position_Sir"});-->
        <!--}-->
      <!--}-->
    <!--}-->
<!--</script>-->
<!--<style scoped>-->

<!--/*.sign_in{*/-->
  <!--/*width: 100%;*/-->
  <!--/*height: 4.8rem;*/-->
  <!--/*background-color: rgb(41,142,235);*/-->
<!--/*}*/-->
  <!--.jiao{-->
    <!--color: white;-->
     <!--font-size: 0.24rem;-->
    <!--margin-top: 1rem;-->
    <!--margin-left: 1rem;-->
  <!--}-->
  <!--.password{-->
    <!--font-size: 0.32rem;-->
    <!--color: white;-->
    <!--margin-left: 1rem;-->
  <!--}-->
  <!--.kong{-->
    <!--width: 100%;-->
    <!--height: 3.2rem;-->
  <!--}-->
  <!--.xiao{-->
    <!--width: 100%;-->
    <!--height: 8rem;-->
    <!--background-color: white;-->
    <!--line-height: 8rem;-->
    <!--border: 0.16rem solid gainsboro;-->
  <!--}-->
<!--.number{-->
  <!--width: 50%;-->
  <!--height: 4rem;-->
  <!--border: 1.6rem solid white;-->
  <!--margin-left: 1.6rem;-->
<!--}-->
<!--.shi{-->
  <!--color: red;-->
  <!--font-size: 0.128rem;-->
  <!--margin-left: 0.8rem;-->
<!--}-->
 <!--.hei{-->
   <!--margin-top: 1.6rem;-->
 <!--}-->
  <!--.in{-->
    <!--width: 90%;-->
    <!--height: 6.4rem;-->
    <!--border-radius: 0.32rem ;-->
    <!--background-color: rgb(76,217,100);-->
    <!--text-align: center;-->
    <!--margin-left: 1rem;-->
  <!--}-->
  <!--.ti{-->
    <!--color: white;-->
    <!--font-size: 0.24rem;-->
    <!--line-height: 6.4rem;-->
  <!--}-->
  <!--.da{-->
    <!--width: 100%;-->
  <!--}-->
<!--.xin{-->
  <!--color:rgb(59,149,233);-->
  <!--margin-top: 1rem;-->
  <!--margin-left: 1rem;-->
<!--}-->
<!--</style>-->



<template>
  <div class="register" ref="register">
    <all_head>
      <template v-slot:one><router-link class="fanhui_qyh" :to="{path:'/position_Sir'}"><span class="pull-right glyphicon glyphicon-menu-left" id="span-right"></span></router-link></template>
      <template v-slot:two><p class="p1">密码登录</p></template>
      <!--<template v-slot:three>111</template>-->
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
      <button class="btn_tijiao"><router-link :to="{path: ''}" class="btn_a">登录</router-link></button>
    </div>
    <!--<div class="resetting">重置密码?</div>-->
    <router-link class="resetting" :to="{path:'/position_Sir'}">重置密码?</router-link>
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
  .p1{
    font-size: 0.2rem;
  }
  .register{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .register .fanhui_qyh{
    color: white;
  }
  .register .register_add_qyh{
    padding-top: 0.6rem;
  }
  .register .register_add_qyh>div{
    padding: 0.12rem;
    /*padding-bottom: 0.144rem;*/
    /*padding-top: 0.55rem;*/
    padding-left: 0.17rem;
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
    width: 0.8rem;
  }
  .register .yanzhengma_change{
    margin-left: 0.16rem;
  }
  .register .yanzhengma_change>p{
    font-size: 0.16rem;
  }
  .register .yanzhengma_change>p:nth-last-of-type(1){
    color: #3b95e9;
  }
  .register .login_tips{
    font-size: 0.112rem;
    color: red;
    padding: 0.128rem 0.16rem;
    line-height: 0.112rem;
  }
  .register .btn_tijiao{
    margin: 0 auto;
    width: 95%;
    display: block;
    height: 0.5rem;
    border-radius: 0.05rem;
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
  .resetting{
    display: block;
    color: #3b95e9;
    margin-left: 2.95rem;
    font-size: 0.14rem;
    margin-top: 0.25rem;
  }
</style>

