var socketio = require('socket.io');
var chat = require('./chat/socket');

module.exports.listen = function(server) {
  var io = socketio.listen(server);
  var home = io.of('/');
  home.on('connection', function(socket) {
    console.log('a client connected');
    socket.on('echo', function(data) {
      console.log(data);
      socket.emit('echo-ack', {'echo-ack:home': data});
    });
    socket.on('disconnect', function() {
      console.log('disconnected');
    });
  });

  var news = io.of('/news');
  news.on('connection', function(socket) {
    console.log('a client connected');
    socket.on('echo', function(data) {
      console.log(data);
      socket.emit('echo-ack', {'echo-ack:news': data});
    });
    socket.on('disconnect', function() {
      console.log('disconnected');
    });
  });

  // separate in sockets implementation multiple files by namespace
  var ioChat = chat.socket(io, '/chat');
  ioChat.on('connection', function(socket) {
    socket.on('echo', function(data) {
      console.log(data);
      socket.emit('echo-ack', {'echo-ack:chat': data});
    });
    socket.on('disconnect', function() {
      console.log('disconnected');
    });
  });

  return io;
};
