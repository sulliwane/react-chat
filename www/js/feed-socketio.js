feed = (function () {

    var socket = io();

    return {
        //watch the chat room msg and user in/out broadcast
        watchChat: function(callback) {
          console.log('onchange');
          socket.on('chat', callback);
          socket.on('user joined',callback);
        },
        // when login success , callback
        watchLogin:function(callback){
          socket.on('login',callback);
        },
        // when onLineUsers changed ,callback
        watchUserList:function(callback){
          socket.on('userlist',callback)
        },
        //send message to server
        sendMsg: function(msg){
          console.log('sendMsg');
          socket.emit('chat',msg);
        },
        // send login request to server
        login: function(userName){
          socket.emit('login',userName);
        },
    };

}());
