// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
import App from './App'
import store from './store'

import 'es6-promise/auto'

export const Socket = socketio('http://localhost:3000')
Vue.use(VueSocketio, Socket, store)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>',
  sockets: {
    connect: () => {
      console.log('connected to server')
    }
  }
})
