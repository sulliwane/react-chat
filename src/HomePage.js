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
    let _self = this;
    feed.watchLogin(msg => {
      _self.setState({
        userName: msg
      });
    });
    feed.watchChat(msg => {
      let msgs = _self.state.msgs;
      msgs.push(msg);
      _self.setState({msgs: msgs});
    });
    feed.watchUserList(userList => {
      _self.setState({userList: userList});
    });
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
