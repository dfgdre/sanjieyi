import Vue from 'vue'
import Router from 'vue-router'
import wei from "../components/Wei_c"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/a',component:wei}
  ]
})
