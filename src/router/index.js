import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Slider from '@/components/Slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/Slider',
    //   name: 'Slider',
    //   component: Slider
    // }
  ]
})
