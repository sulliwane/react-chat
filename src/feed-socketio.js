import io from 'socket.io-client';

const feed = (function () {
  var socket = io();
  return {
    // watch the chat room msg and user in/out broadcast
    watchChat: callback => {
      socket.on('chat', callback);
      socket.on('user joined',callback);
    },
    // when login success , callback
    watchLogin: callback => {
      socket.on('login',callback);
    },
    // when onLineUsers changed ,callback
    watchUserList: callback => {
      socket.on('userlist', callback);
    },
    watchRoomList: callback => {
      socket.on('roomlist', callback);
    },
    addRoom: roomName => {
      socket.emit('addroom', roomName);
    },
    // send message to server
    sendMsg: msg => {
      socket.emit('chat',msg);
    },
    // send login request to server
    login: userName => {
      socket.emit('login',userName);
    },
  };
}());

export default feed;
