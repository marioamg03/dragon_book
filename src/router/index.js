import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donaciones from '@/components/Donaciones'
import LeccionesDeAmor from '@/components/LeccionesDeAmor'
// import Slider from '@/components/Slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/Slider',
    //   name: 'Slider',
    //   component: Slider
    // }
    {
      path: '/Donaciones',
      name: 'Donaciones',
      component: Donaciones
    },
    {
      path: '/LeccionesDeAmor',
      name: 'Lecciones de amor',
      component: LeccionesDeAmor
    }
  ]
})
