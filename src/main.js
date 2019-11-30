import Vue from 'vue'
import App from './App.vue'
//import vue2 google map
import * as VueGoogleMaps from 'vue2-google-maps'
// import the vue router
import VueRouter from 'vue-router'
// import the hello component
import Index from './components/Index'

Vue.config.productionTip = false



Vue.use(VueGoogleMaps, {
  load: {
    key: 'Google map API key',
    libraries: 'places'
  }
})
// tell vue to use the router
Vue.use(VueRouter)


// define your routes
const routes = [
  // define the root url of the application.
  { path: '/', component: Index }

]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


new Vue({
  render: h => h(App),
  // define the selector for the root component
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare components that the root component can access
  components: { App },
  // pass in the router to the Vue instance
  router
}).$mount('#app')
