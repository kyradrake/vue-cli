// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { Client } from './client'

Vue.config.productionTip = false

Vue.use(Vuex)

let client = new Client()
client.startClient()

console.log('client started')

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
    ],
    nextToDoID: 3
  },
  getters: {
    numberToDos: state => {
      return state.todos.length
    }
  },
  mutations: {
    addNewToDoItem(state, todo) {
	    state.todos.push({
	      id: state.nextToDoID,
		    item: todo
	    })
	    state.nextToDoID++
	  },
    removeToDoItem(state, index) {
      state.todos.splice(index, 1)
    }
  }
})
