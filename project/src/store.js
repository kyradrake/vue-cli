// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
	  todos: [
      {
  		  id: 1,
  		  item: 'Do Thing 1'
  		},
  		{
  		  id: 2,
  		  item: 'Do Thing 2'
  		}
    ]
  },
  getters: {
    numberToDos: state => {
      return state.todos.length
    }
  }
})
