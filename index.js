// write your code here
const http = require('http');

const server = http.createServer(function (request, response) {
  console.log('Received' + request.method + ' request for: ' + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
});

server.listen(8080, 'localhost', null, function() {
  console.log('Server is listening on localhost:8080')
});