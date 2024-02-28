const http = require('http')

const server = http.createServer((request, response)=> {
response.end('Välkommen till min first Node.js-server')
})

server.listen(3000)