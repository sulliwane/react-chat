var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

var onLineUsersNumber = 0;

io.on('connection', function (socket) {
    socket.on('login',function(userName){
      onLineUsersNumber++,
      socket.userName = userName;
      socket.broadcast.emit('user joined',userName);
    });
    socket.broadcast.emit('chat','someone joined');
    socket.on('chat', function (msg) {
        console.log('Socket %s say: %s', socket.userName,msg);
        io.emit('chat',`user ${socket.userName} say: ${msg}`);
    });
    socket.on('disconnect', function () {
        io.emit('chat',`User ${socket.userName} disconnected`);
    });
});


http.listen(3000, function () {
    console.log('listening on: 3000');
});
