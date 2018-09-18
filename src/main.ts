import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import WelcomePage from './components/WelcomePage.vue'
import Characters from './Characters.vue'
import Battle from './Battle.vue'
import NewCharacter from './NewCharacter.vue'
import Preferences from './Preferences.vue'

import Notification from 'vue-notification'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './registerServiceWorker'

Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(BootstrapVue)

const meta = {
  title: 'CopperCask',
  metaTags: [{
    name: 'A simple character manager for tabletop RPG\'s',
    content: 'CopperCask Application'
  }]
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: WelcomePage, meta },
    { path: '/characters', component: Characters, meta },
    { path: '/battle', component: Battle, meta },
    { path: '/newchar', component: NewCharacter, meta },
    { path: '/preferences', component: Preferences, meta }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
