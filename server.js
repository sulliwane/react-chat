var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

io.on('connection', function (socket) {
    io.emit('chat','one User connected');
    // socket.join('chat room');
    socket.on('chat', function (msg) {
        console.log('Socket %s say: %s', socket.id,msg);
        io.emit('chat','user ${socket.id} say: ${msg}');
    });
    socket.on('disconnect', function () {
        io.emit('chat','User ${socket.id} disconnected');
    });
});


http.listen(3000, function () {
    console.log('listening on: 3000');
});
