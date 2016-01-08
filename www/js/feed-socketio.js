feed = (function () {

    var socket = io();

    return {
        onChange: function(callback) {
          console.log('onchange');
          socket.on('chat', callback);
          socket.on('user joined',callback);
        },
        sendMsg: function(msg){
          console.log('sendMsg');
          socket.emit('chat',msg);
        },
        login: function(userName){
          socket.emit('login',userName);
        },
        watchUserList:function(callback){
          socket.on('userlist',callback)
        },
    };

}());
