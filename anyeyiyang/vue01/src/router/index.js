import Vue from 'vue'
import Router from 'vue-router'
import wei from "../components/Wei_c"
import qyh from "../components/changshi_qyh"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/a',component:wei},
    {path:'/qyh',component:qyh}
  ]
})
