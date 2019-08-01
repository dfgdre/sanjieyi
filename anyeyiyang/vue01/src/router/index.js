import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import pos from "../components/position_Sir"
import sign_in from "../components/sign_in";

export default new Router({
  routes: [
    {path:"",redirect:"/position_Sir"},
    {path:"/position_Sir",component:pos},
    {path:"/sign_in",component:sign_in}
  ]
})
