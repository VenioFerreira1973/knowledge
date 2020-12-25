import 'font-awesome/css/font-awesome.css' 
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwibmFtZSI6Ik1hcmlhIEZlcnJlaXJhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA4OTA0NjM1LCJleHAiOjE2MDkxNjM4MzV9.O2onSx9G6eQ6KDlEYZP5JwGk4R2N5hhg5UYljrvnSkg'

new Vue({
  store, 
  router,
  render: h => h(App)
  
}).$mount('#app')