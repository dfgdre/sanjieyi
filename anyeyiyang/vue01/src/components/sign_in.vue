<template>
    <div class="sign_in">
      <p class=" glyphicon glyphicon-menu-left haha"></p>
      <span class="password">密码登录</span>
    </div>

</template>

<script>
    export default {
        name: "sign_in"
    }
</script>

<style scoped>
.sign_in{
  width: 100%;
  height: 40px;
  background-color: rgb(41,142,235);

}
  .haha{
    color: white;
     font-size: 2rem;
    margin-top: 5%;
    margin-left: 2%;

  }
  .password{
    font-size: 1.5rem;
    color: white;
    margin-left: 30%;
  }

</style>
