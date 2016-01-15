import React, {Component} from 'react';
import {MessageList, MessageRow, MessageInput} from './MesaageBox';
import Login from './Login';
import feed from './feed-socketio';
import UserList from './UserList';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    var msgs = [];
    this.state = {
      msgs: msgs,
      userName: '',
      userList: []
    };
    this._sendMsg = this._sendMsg.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }
  componentDidMount() {
    feed.watchLogin(function (msg) {
      this.setState({
        userName: msg
      });
    }.bind(this));
    feed.watchChat(function (msg) {
      console.log(msg);
      msgs.push(msg);
      this.setState({msgs: msgs});
    }.bind(this));
    feed.watchUserList(function (userList) {
      console.log(userList);
      this.setState({userList: userList});
    }.bind(this));
  }
  _sendMsg(msg) {
    feed.sendMsg(msg);
  }
  _handleLogin(userName) {
    feed.login(userName);
  }
  render() {
    var userName = this.state.userName;
    var rows = userName && userName.length > 0 ? (
      <div>
        <MessageList msgs={this.state.msgs} />
        <UserList userList={this.state.userList} />
        <MessageInput sendMessage={this._sendMsg}/>
      </div>
    ) : (
      <div>
        <Login onLogin={this._handleLogin} />
      </div>
    );
    return (
      <div>
       {rows}
      </div>
    );
  }
 }
