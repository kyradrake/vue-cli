import Vue from 'vue'
import Vuex from 'vuex'
import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'
/*
export class Client {

  constructor() {
    this.todos = {}
  }

  startClient() {
    // Establish client connection to server
    var io = require('socket.io-client')
    var socket = io('http://localhost:3000')

    socket.emit('data')
    socket.on('todos', (data) => {
      this.todos = data
      console.log('todos are ' + this.todos)
    })
  }

  getServerData() {
    socket.emit('data')
  }

  addItem(item) {
    // add item to todo data and send to server
    socket.emit('addItem', {todo: item})
  }

  removeItem(item) {
    // remove item from todo data and send to server
  }
}
*/
