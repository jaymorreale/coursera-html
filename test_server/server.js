// var http = require('http');
//
// http.createServer(function(req, response){
//   response.writeHead(200, {'Content-type': 'text-plain'})
//   response.end('Hello')
//
// }).listen(1337, '127.0.0.1')
//
// console.log('Webserver has started')

var http = require('http');
var fs = require('fs');


http.createServer(function(req, response){

  fs.readFile('index.html', function(err, data){
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end(data)
  })
}).listen(1337, '127.0.0.1')

console.log('Webserver has started')
