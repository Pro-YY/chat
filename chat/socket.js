module.exports.socket = function(io, nsp) {
  var sio = io.of(nsp);
  sio.on('connection', function(socket) {
    console.log(nsp + ': a client connected: ' + socket.client.conn.remoteAddress);
    clientIP = socket.client.conn.remoteAddress;
    socket.on('message', function(msg) {
      console.log(msg);
      sio.emit('message', {time: new Date(), name: msg.name, ip: clientIP, data: msg.data}); // to everyone
      //socket.emit('message', msg.data); // to client itself
      //socket.broadcast.emit('message', msg.data); // to everyone but client
    });
  });
  return sio;
};
