import React, {Component} from 'react';

var divStyle = {
  color: 'white'
};

export default class RoomList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this._handleChange = this._handleChange.bind(this);
      this._onClickAddRoom = this._onClickAddRoom.bind(this);
    }
    _onClickAddRoom () {
        var addRoom = this.state.input.trim();
        this.props._addRoom(addRoom);
    }
    _handleChange(e) {
      this.setState({
        input: e.currentTarget.value
      });
    }
    render() {
        return (
        <div id="RoomListBox">
            <input
            type="text"
            value={this.state.input}
            onChange={this._handleChange}/>
            <button onClick={this._onClickAddRoom}>add Room</button>
            <ul>
            {
                this.props.RoomList.map((result,index) => {
                    return <li key={index}>
                        <a href="#" title={result}>
                            {result}
                        </a>
                    </li>;
                })
            }
            </ul>
        </div>
        );
    }
}
