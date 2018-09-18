import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Characters from './Characters.vue'
import Battle from './Battle.vue'
import NewCharacter from './NewCharacter.vue'

import Notification from 'vue-notification'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './registerServiceWorker'

Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
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
    }, {
      path: '/characters',
      component: Characters
    }, {
      path: '/battle',
      component: Battle
    }, {
      path: '/newchar',
      component: NewCharacter
    }
  ]
})

new Vue({
  router,
  data: {
    currentRoute: window.location.pathname
  },
  render: h => h(App)
}).$mount('#app')
