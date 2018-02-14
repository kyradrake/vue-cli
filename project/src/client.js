const net = require('net')

// server host and port
var host = 'localhost'
var port = 3000

// connect client to server
var client = new net.Socket()
client.connect(port, host, () => console.log('Connected to server on port 3000!'))

exports.client = client
