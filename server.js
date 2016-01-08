var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

var onLineUsers = [];

io.on('connection', function (socket) {
    socket.on('login',function(userName){
      socket.userName = userName;
      onLineUsers.push(socket.userName);
      socket.broadcast.emit('user joined',userName);
    });
    // socket.broadcast.emit('chat','someone joined');
    socket.on('chat', function (msg) {
        console.log('Socket %s say: %s', socket.userName,msg);
        socket.broadcast.emit('chat',`user ${socket.userName} say: ${msg}`);
    });
    socket.on('userlist',function(){
      socket.broadcast.emit('userlist',onLineUsers);
    });
    socket.on('disconnect', function () {
      // how to delelte a item in array
        var indexOfUser = onLineUsers.indexOf(socket.userName);
        var _tmp = onLineUsers.slice(0,indexOfUser).concat(onLineUsers.slice(indexOfUser+1));
        onLineUsers = _tmp;
        socket.broadcast.emit('userlist',onLineUsers);
        socket.broadcast.emit('chat',`User ${socket.userName} disconnected`);
    });
});


http.listen(3000, function () {
    console.log('listening on: 3000');
});
