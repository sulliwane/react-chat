var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    feed = require('./feed');

app.use(express.static(path.join(__dirname, './www')));

io.on('connection', function (socket) {
    console.log('User connected. Socket id %s', socket.id);
    // socket.join('chat room');
    socket.on('chat', function (msg) {
        console.log('Socket %s say: %s', socket.id,msg);
        io.emit('chat',`user ${socket.id} say: ${msg}`);
    });
    socket.on('disconnect', function () {
        io.emit('chat',`User ${socket.id} disconnected`);
    });
});

feed.start(function(room, type, message) {
    io.to(room).emit(type, message);
});

http.listen(3000, function () {
    console.log('listening on: 3000');
});
