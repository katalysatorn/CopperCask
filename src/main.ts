import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Notification from 'vue-notification'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './registerServiceWorker'

Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      meta: {
        title: 'CopperCask',
        metaTags: [{
          name: 'A simple character manager for tabletop RPG\'s',
          content: 'CopperCask Application'
        }]
      }
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
