var express = require('express');
var server = express();
var port = process.env.PORT || 8090;

// server.use(express.static(__dirname + '/public'));
server.use(express.static('public'))

server.get('/', function(request, response) {
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function() {
  console.log('Now listening on port: ' + port);
});
