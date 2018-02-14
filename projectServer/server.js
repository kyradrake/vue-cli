const express = require('express')
const app = express()

// Read data from JSON file
const fs = require('fs');
let readData = fs.readFileSync('data.json')
let todos = JSON.parse(readData)

// Home path
app.get('/', (req, res) => res.send('Hello World!'))

// Path to send todos
app.get('/data', (req, res) => res.send(JSON.stringify(todos)))

// Start server
app.listen(3000, () => console.log('Example app listening on port 3000!'))

// Write data to JSON file
function updateData(data) {
  let writeData = JSON.stringify(data)
  fs.writeFile('data.json', writeData, (err) => {
    if(err)
      throw err
  })
}
