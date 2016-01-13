import React, {Component} from 'react';

export default class UserList extends Component {
    render() {
      return (
          <div id="userListBox">
            <div id="userListTitle">
              <b>用户列表</b>
              <span id="onlineNumber">
                目前{this.props.userList.length}人在线
              </span>
            </div>
            <ol id="userList">
            {
              this.props.userList.map((result,index) => {
                return <li key={index}>
                  <a href="#" title={result}>
                    {result}
                  </a>
                </li>;
              })
            }
            </ol>
          </div>
      );
    }
}
