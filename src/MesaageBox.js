import React, {Component} from 'react';

export class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  sendMessage() {
    this.props.sendMessage(this.state.message);
    this.setState({message: ''});
  }
  handleChange(event) {
    this.setState({message: event.target.value});
  }
  render() {
    return (
        <div className="row">
            <div className="input-group">
                <input
                type="text"
                className="form-control"
                placeholder="input..."
                value={this.state.message}
                onChange={this.handleChange}
                />
                <span className="input-group-btn">
                    <button
                    className="btn btn-default"
                    type="button"
                    onClick={this.sendMessage}
                    >
                    <span
                    className="glyphicon glyphicon-eye-open"
                    aria-hidden="true"></span> Send
                    </button>
                </span>
            </div>
        </div>
    );
  }
}

export class MessageRow extends Component {
  render() {
    console.log(this.props.msg);
    return (
        <tr>
          <td>{this.props.msg}</td>
        </tr>
    );
  }
}

export class MessageList extends Component {
  render() {
    var items = [];
    for (var i = 0; i < this.props.msgs.length; i++) {
      items.push(
        <MessageRow key={this.props.msgs[i]} msg={this.props.msgs[i]} />);
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
}
