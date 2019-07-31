import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import pos from "../components/position_Sir"

export default new Router({
  routes: [
    {path:"",redirect:"/position_Sir"},
    {path:"/position_Sir",component:pos}
  ]
})
