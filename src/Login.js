import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleChange(e) {
    this.setState({
      input: e.currentTarget.value
    });
  }
  _handleSubmit(e) {
    e.preventDefault();
    var userName = this.state.input.trim();
    this.props.onLogin(userName);
  }
  render() {
    return (
      <form className="form-inline" onSubmit={this._handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name：</label>
          <input
          type="text"
          className="form-control"
          id="username"
          placeholder="username"
          value={this.state.input}
          onChange={this._handleChange}/>
        </div>
        <button type="submit" className="btn btn-default">Login</button>
      </form>
    );
  }
}
