// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
	  todos: []
  },
  getters: {
    numberToDos: state => {
      return state.todos.length
    }
  },
  mutations: {
    SOCKET_TODOS: (state, data) => {
      state.todos = JSON.parse(data)
    }
  }
})
