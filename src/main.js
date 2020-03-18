import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

let data = {
  langName: 'A New Language',
  consonants: [],
  dictionary: []
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')