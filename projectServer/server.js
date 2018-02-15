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

// testing
console.log('server data ' + serverData)
console.log('nextToDoID is ' + serverData.nextToDoID)

// Start listening for clients
server.listen(3000)

// Log to console when a client connects
io.on('connection', (socket) => {
  console.log('Client connected!')

  // Send JSON data to client when 'data' message is received
  socket.on('data', () => {
    console.log('Client requested data')
    socket.emit('todos', JSON.stringify(todos))
  })
})

// Write data to JSON file
function updateData(data) {
  let writeData = JSON.stringify(data)
  fs.writeFile('data.json', writeData, (err) => {
    if(err)
      throw err
  })
}
