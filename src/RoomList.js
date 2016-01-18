import React, {Component} from 'react';

var divStyle = {
  color: 'white'
};

export default class RoomList extends Component {
    onClickAddRoom () {
        console.log("onClickAddRoom");
    }
    render() {
        return (
        <div id="RoomListBox">
            <div onClick={this.onClickAddRoom}>add Room</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
        );
    }
}
