import React, {Component} from 'react';
import {MessageList, MessageRow, MessageInput} from './MesaageBox';
import Login from './Login';
import feed from './feed-socketio';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    var msgs = [];
    feed.watchChat(function (msg) {
      console.log(msg);
      msgs.push(msg);
      this.setState({msgs: msgs});
    }.bind(this));
    this.state = {
      msgs: msgs,
      userName: ''
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
