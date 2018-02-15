const express = require('express')
const http = require('http')
const fs = require('fs');

// Set up server
var app = express()
var server = http.Server(app);
var io = require('socket.io')(server)

// Start listening for clients
server.listen(3000)

// Log to console when a client connects
io.on('connection', function(socket) {
  console.log('Client connected!')
})

// Read data from JSON file
let readData = fs.readFileSync('data.json')
let todos = JSON.parse(readData)

// Write data to JSON file
function updateData(data) {
  let writeData = JSON.stringify(data)
  fs.writeFile('data.json', writeData, (err) => {
    if(err)
      throw err
  })
}
