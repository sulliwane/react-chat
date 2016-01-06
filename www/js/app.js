var WatchStock = React.createClass({
    getInitialState: function() {
        return {symbol: ""};
    },
    watchStock: function() {
        this.props.watchStockHandler(this.state.symbol);
        this.setState({symbol: ''});
    },
    handleChange: function(event) {
        this.setState({symbol: event.target.value});
    },
    render: function () {
        return (
            <div className="row">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Comma separated list of stocks to watch..." value={this.state.symbol} onChange={this.handleChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.watchStock}>
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Send
                        </button>
                    </span>
                </div>
            </div>
        );
    }
});

var StockRow = React.createClass({
    render: function () {
      console.log(this.props.msg);
        return (
            <tr>
              <td>{this.props.msg}</td>
            </tr>
        );
    }
});

var StockTable = React.createClass({
    render: function () {
        var items = [];
        for (var i = 0; i < this.props.msgs.length; i++) {
          items.push(<StockRow key={this.props.msgs[i]} msg={this.props.msgs[i]} />);
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
        feed.onChange(function(msg) {
            console.log(msg);
            msgs.push(msg);
            this.setState({msgs:msgs,});
        }.bind(this));
        return {msgs: msgs};
    },
    _sendMsg: function(msg){
      feed.sendMsg(msg);
    },
    render: function () {
        return (
            <div>
                <StockTable msgs={this.state.msgs} />
                <WatchStock watchStockHandler={this._sendMsg}/>
            </div>
        );
    }
});

React.render(<HomePage />, document.getElementById('main'));
