

var express = require('express'),
  config = require('./config/config');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./config/express')(app, config);

io.on('connection', function (socket) {
  // On new message from a client
  socket.on('clientVote', function (data) {
    // We broadcast data
    socket.broadcast.emit('bcVote', data);
  });

  socket.on('reset', function () {
    socket.broadcast.emit('reset');
  });
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
