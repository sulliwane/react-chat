var UserList = React.createClass({
    getInitialState: function() {
        return {style_count:-1, userList: ''};
    },
    render: function () {
        return (
            <div id="userListBox">
                <div id="userListTitle"><b>用户列表</b><span id="onlineNumber">目前{this.props.userList.length}人在线</span></div>
            <ol id="userList">
                {
    				this.props.userList.map(function(result,index) {
    					return <li key={index}><a href="#" title={result} onclick={this.li_onclick}>{result}</a></li>;
    				})
    			}
            </ol>
            </div>
        );
    }
});
