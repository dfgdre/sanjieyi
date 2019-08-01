<template>
  <div class="one_1">
    <div class="op_head">
      <div class="head1"><span>ele.me</span><span class="pull-right">注册</span><span class="pull-right">|</span><span class="pull-right">登录</span>
        <div class="clearfix"></div>
      </div>
      <div class="head2"><span class="pull-left">定位当前城市</span><span class="pull-right">定位不准时,请在城市列表中选择</span>
        <div class="clearfix"></div>
      </div>
      <div class="head3"><span>郑州</span><span class="pull-right"> > </span>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="remen">
      <div class="shuju">
        <div class="zumu">热门城市</div>
        <div class="once" v-for="(one,key) in arr2" :key="key" @click="btn_name(once.name)">{{one.name}}</div>
      </div>
    </div>
    <div class="shuju" v-for="(once,k) in arr1" :key="k">
      <div class="zumu">{{once[0]}}<p v-if="once[0]==='A'" class="p1">&emsp(按字母排序)</p></div>
      <div class="once" v-for="(one,key) in once[1]" :key="key" @click="btn_name(one.name)">
        {{one.name}}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "position_Sir",
    data(){
      return {
        arr1:[],
        arr2:[],
      }
    },
    computed:{
      btn_name(k){
        this.$router.push({path:"/position_Sir",query:{name:"111"}});
      },
    },
    created(){
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group',{}).then((result)=>{
        //后台传来的值存在result的data里面
        const d=result.data;
        let a = [];
        for (let i = 65; i <= 90; i++) {
          const b=String.fromCodePoint(i);
          if (d[b]) {
            a.push([b,d[b]])
          }
        }
        console.log(a);
        this.arr1=a;
      }).catch((error)=>{
        console.log(error.data);
      });

      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot',{}).then((result)=>{
        //后台传来的值存在result的data里面
        console.log(result.data);
        this.arr2=result.data;
      }).catch((error)=>{
        console.log(error.data);
      })

    }
  }
</script>

<style scoped>
  .one_1{
    width: 100%;
    background:rgba(0,0,0,0.1);
    font-size: 0;
    line-height: 0;
  }
  .one_1 .shuju{
    font-size: 14px;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.4);
    border-left: 1px solid rgba(0,0,0,0.4);
    box-shadow:0 1px 1px rgba(0,0,0,0.4),0 -1px 1px rgba(0,0,0,0.4);
    margin-top: 5%;
    background:antiquewhite;
  }
  .one_1 .zumu{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.4);
  }
  .one_1 .once{
    font-size: 100%;
    width: 25%;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.4);
    border-bottom: 1px solid rgba(0,0,0,0.4);
    box-sizing: border-box;

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .one_1 .p1{
    display: inline-block;
  }
  .one_1 .op_head{
    line-height: 20px;
    font-size: 10px;
  }
  .one_1 .head1{
    background: blue;
  }
  .one_1 .head2{
    background: skyblue;
  }
  .one_1 .head3{
    background: aquamarine;
  }
</style>
