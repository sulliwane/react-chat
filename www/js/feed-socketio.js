feed = (function () {

    var socket = io();

    return {
        onChange: function(callback) {
          console.log('onchange');
          socket.on('chat', callback);
        },
        sendMsg: function(msg){
          console.log('sendMsg');
          socket.emit('chat',msg);
        },
    };

}());
