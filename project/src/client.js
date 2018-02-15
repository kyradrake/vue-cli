// Establish client connection to server
var io = require('socket.io-client')
var socket = io('http://localhost:3000')

var todos = {}

socket.emit('data')
socket.on('todos', (data) => {
  todos = data
  console.log('todos are ' + todos)
})

// connect client to server
//var client = new net.Socket()
//client.connect(port, host, () => console.log('Connected to server on port 3000!'))

//client.write('data')

//exports.client = client

module.exports = {
  getServerData: () => {
    socket.emit('data')
  },
  addItem: (item) => {
    // add item to todo data and send to server
  },
  removeItem: (item) => {
    // remove item from todo data and send to server
  },
}
