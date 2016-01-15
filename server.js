var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var onLineUsers = [];
var roomList = [ 'javascript', 'nodejs', 'reactjs', 'reactnative' ];

io.on('connection', socket => {
  // listening  login with userName and will broadcast the user joined message
  // and also the onLineUsers list.
  socket.on('login', userName => {
    socket.userName = userName;
    onLineUsers.push(socket.userName);
    socket.emit('login',userName);
    socket.broadcast.emit('user joined',`${userName} joined`);
    socket.emit('roomlist', roomList);
    // io.emit('userlist',onLineUsers);
  });
  socket.on('addroom', roomName => {
    roomList.push(roomName);
  });
  // listening the chating message and broadcast to the room
  socket.on('chat', msg => {
    io.emit('chat',`${socket.userName}:${msg}`);
  });
  // when user left the room and
  socket.on('disconnect', () => {
    // check it
    var indexOfUser = onLineUsers.indexOf(socket.userName);
    var _tmp =
    onLineUsers.slice(0,indexOfUser).concat(onLineUsers.slice(indexOfUser + 1));
    onLineUsers = _tmp;
    io.emit('userlist',onLineUsers);
    socket.broadcast.emit('chat',`${socket.userName} disconnected`);
  });
});

http.listen(3000, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
