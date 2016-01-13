var MessageInput = React.createClass({
    getInitialState: function() {
        return {message: ''};
    },
    sendMessage: function() {
        this.props.sendMessage(this.state.message);
        this.setState({message: ''});
    },
    handleChange: function(event) {
        this.setState({message: event.target.value});
    },
    render: function () {
        return (
            <div className="row">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="input..." value={this.state.message} onChange={this.handleChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.sendMessage}>
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Send
                        </button>
                    </span>
                </div>
            </div>
        );
    }
});

var MessageRow = React.createClass({
    render: function () {
      console.log(this.props.msg);
        return (
            <tr>
              <td>{this.props.msg}</td>
            </tr>
        );
    }
});

var MessageList = React.createClass({
    render: function () {
        var items = [];
        for (var i = 0; i < this.props.msgs.length; i++) {
          items.push(<MessageRow key={this.props.msgs[i]} msg={this.props.msgs[i]} />);
        }
        return (
            <div className="row">
            <table className="table-hover">
                <thead>
                    <tr style={{width: 300}}>
                        <th>Msg</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            </div>
        );
    }
});

var HomePage = React.createClass({
    getInitialState: function() {
        var msgs = [];
        feed.watchChat(function(msg) {
            console.log(msg);
            msgs.push(msg);
            this.setState({msgs:msgs,});
        }.bind(this));

        feed.watchUserList(function(msg) {
            console.log(msg);
            this.setState({userList:msg});
        }.bind(this));

        return {
          msgs: msgs,
          userName: '',
          userList: new Array()
        };
    },
    componentDidMount: function() {
      feed.watchLogin(function (msg) {
        this.setState({
          userName: msg
        });
      }.bind(this));
    },
    _sendMsg: function(msg){
      feed.sendMsg(msg);
    },
    _handleLogin: function (userName) {
      feed.login(userName);
    },
    render: function () {
      var userName = this.state.userName;
      var rows = userName && userName.length > 0 ? (
        <div>
          <MessageList msgs={this.state.msgs} />
          <UserList userList={this.state.userList}/>
          <MessageInput sendMessage={this._sendMsg}/>
        </div>
      ) : (
        <div>
          <LoginPage onLogin={this._handleLogin} />
        </div>
      );
       return (
         <div>
          {rows}
         </div>
       );
    }
});

React.render(<HomePage />, document.getElementById('main'));
