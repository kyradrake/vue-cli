import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'
import HelloWorld from '@/components/HelloWorld'
import ToDoHeader from '@/components/ToDoHeader'
import ToDoList from '@/components/ToDoList'

describe('HelloWorld.vue', () => {
  it('should render correct title', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Kyra\'s To-Do App')
  })
})

describe('ToDoHeader.vue', () => {
  it('should render correct header', () => {
    Vue.use(Vuex)
    const Constructor = Vue.extend(ToDoHeader)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.querySelector('.to-do-header h3').textContent)
      .to.equal('2 To Do Items Remaining')
  })
})

describe('ToDoItem.vue', () => {
  it('should render correct first to do item', () => {
    Vue.use(Vuex)
    const Constructor = Vue.extend(ToDoList)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.querySelector('.to-do-item li').textContent)
      .to.equal('Do Thing 1')
  })
})
