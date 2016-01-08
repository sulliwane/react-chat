var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

var onLineUsers = [];

io.on('connection', function (socket) {
  socket.userName = 'pluto';

    // listening  login with userName and will broadcast the user joined message
    // and also the onLineUsers list.
    socket.on('login',function(userName){
      socket.userName = userName;
      onLineUsers.push(socket.userName);
      socket.broadcast.emit('user joined',`${userName} joined`);
      io.emit('userlist',onLineUsers);
    });
    // listening the chating message and broadcast to the room
    socket.on('chat', function (msg) {
        console.log('Socket %s say: %s', socket.userName,msg);
        io.emit('chat',`${socket.userName}:${msg}`);
    });
    //when user left the room and
    socket.on('disconnect', function () {
      // check it
        var indexOfUser = onLineUsers.indexOf(socket.userName);
        var _tmp = onLineUsers.slice(0,indexOfUser).concat(onLineUsers.slice(indexOfUser+1));
        onLineUsers = _tmp;
        io.emit('userlist',onLineUsers);
        socket.broadcast.emit('chat',`${socket.userName} disconnected`);
    });
});


http.listen(3000, function () {
    console.log('listening on: 3000');
});
