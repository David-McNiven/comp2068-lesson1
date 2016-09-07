// link to the node http library
var http = require('http');

// use callback to start the server
http.createServer(function(request, response){
  response.writeHead(200); // request OK
  response.end('First Node Page');
}).listen(3000);

console.log('server is running on port 3000');
