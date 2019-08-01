<template>
<div class="gonde">
  <div class="sign_in">
    <p class=" glyphicon glyphicon-menu-left jiao"></p>
    <span class="password">密码登录</span>
  </div>
  <div class="kong"></div>
  <div class="xiao">
    <input  class="number" type="text" name="firstname" placeholder="账号">
  </div>
  <div class="xiao">
    <input  class="number":type="checked?'password':'text'" placeholder="密码">

  </div>
  <div class="xiao">
    <input  class="number" type="text"placeholder="验证码">
  </div>
  <p class="shi">温馨提示: 未注册过得账号，登录时将自动注册</p>
  <p class="shi hei">注册过得用户可凭账号密码登录</p>
  <div class="da"><div class="in"><span class="ti">登录</span></div></div>
  <p class="xin">重置密码?</p>

</div>

</template>

<script>
  import Vue from 'vue';
  import All_head from "./all_head";
    export default {
        name: "sign_in",
      data(){
          return{
            checked:false

          }
      },
      methods:{

      }
    }
</script>
<style scoped>
  .gonde{
    width: 100%;
    background-color: rgb(242,242,242);
  }
.sign_in{
  width: 100%;
  height: 30px;
  background-color: rgb(41,142,235);
}
  .jiao{
    color: white;
     font-size: 2rem;
    margin-top: 1%;
    margin-left: 2%;
  }
  .password{
    font-size: 2rem;
    color: white;
    margin-left: 30%;
  }
  .kong{
    width: 100%;
    height: 20px;
  }
  .xiao{
    width: 100%;
    height: 50px;
    background-color: white;
    line-height: 50px;
    border: 1px solid gainsboro;
  }
.number{
  width: 50%;
  height: 25px;
  border: 1px solid white;
  margin-left: 10px;
}
.shi{
  color: red;
  font-size: 1.2rem;
  margin-left: 5px;
}
 .hei{
   margin-top: 10px;
 }
  .in{
    width: 90%;
    height: 40px;
    border-radius: 2px ;
    background-color: rgb(76,217,100);
    text-align: center;
    margin-left: 5%;
  }
  .ti{
    color: white;
    font-size: 2rem;
    line-height: 40px;
  }
  .da{
    width: 100%;
  }
.xin{
  color:rgb(59,149,233);
  margin-top: 6%;
  margin-left: 80%;
}
</style>
