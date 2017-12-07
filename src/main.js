import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';



//import the vue router
import VueRouter from 'vue-router'

//tell vue to use the router
Vue.use(BootstrapVue);
Vue.use(VueRouter);


import profile from './components/profile.vue'

import search from './components/search.vue'

import login from './components/login.vue'

import leaderboard from './components/leaderboard.vue'




const routes = [

  { path: '/', component: search},

  { path: '/login', component: login },

  { path: '/leaderboard', component: leaderboard },

  { name: 'profile', path: '/profile/:name', component: profile }


]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')//mount the router on the app


