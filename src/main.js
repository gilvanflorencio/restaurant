import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/global.less'
import router from './router'
import 'es6-promise/auto'
import { store } from './store/store'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(Vuex) 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
