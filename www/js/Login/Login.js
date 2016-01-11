var LoginPage = React.createClass({
  getInitialState: function() {
    return {
      input: ''
    }
  },
  _handleChange: function (event) {
    this.setState({
      input: event.currentTarget.value
    });
  },
  _handleSubmit: function (event) {
    event.preventDefault();
    var userName = this.state.input.trim();
    this.props.onLogin(userName);
  },
  render: function() {
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
});
