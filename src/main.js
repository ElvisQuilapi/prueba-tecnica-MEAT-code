import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store/index'
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})