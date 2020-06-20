// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      },
    },
    icons: {
      iconfont: 'mdi'
    },
  }),
  router,
  components: { App },
  template: '<App/>'
})
