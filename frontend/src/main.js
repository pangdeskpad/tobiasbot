import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(require('vue-pusher'), {
  api_key: '58a4198819b613674f9e',
  options: {
    cluster: 'eu',
    encrypted: true,
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
