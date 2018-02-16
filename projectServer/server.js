const express = require('express')
const http = require('http')
const fs = require('fs');

// Set up server
var app = express()
var server = http.Server(app);
var io = require('socket.io')(server)

// Read data from JSON file
var readData = fs.readFileSync('data.json')
var serverData = JSON.parse(readData)

var todos = serverData.todos
var nextToDoID = serverData.nextToDoID

// Start listening for clients
server.listen(3000)

// Log to console when a client connects
io.on('connection', (socket) => {
  console.log('Client connected!')

  socket.emit('todos', JSON.stringify(todos))

  // Client adds a To Do item to the list
  socket.on('addItem', (todo) => {
    console.log('Client added data: ' + todo)

    todos.push({
      id: nextToDoID,
      item: todo
    })
    nextToDoID++
  })

  // Client removes a To Do item from the list
  socket.on('removeItem', () => {
    console.log('Client removed data')
  })
})

// Write data to JSON file
function updateData() {
  var writeData = {
    todos: todos,
    nextToDoID: nextToDoID
  }
  fs.writeFile('data.json', JSON.stringify(writeData), (err) => {
    if(err)
      throw err
  })
}
