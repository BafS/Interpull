

var express = require('express'),
  config = require('./config/config');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./config/express')(app, config);

// Data are on server side
var data = [0 , 0, 0];

io.on('connection', function (socket) {
  socket.emit('init', data);

  // On new message from a client
  socket.on('clientVote', function (info) {
    // We broadcast data
    socket.broadcast.emit('bcVote', info);

    var n = info.key;
    data[n] = info.votes;
  });

  socket.on('reset', function () {
    socket.broadcast.emit('reset');
  });
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
