

var express = require('express'),
  config = require('./config/config');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./config/express')(app, config);

io.on('connection', function (socket) {
  socket.emit('message', { hello: 'world' });
  socket.on('message', function (data) {
    console.log(data);
  });
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
