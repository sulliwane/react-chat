var User_list = React.createClass({
    getInitialState: function() {
        return {style_count:-1, user_list: ''};
    },
    li_onclick: function(){
        console.log("li click");
    },
    render: function () {
        return (
            <div id="user_list_box">
                <div id="user_list_title"><b>用户列表</b><span id="online_number">目前{this.props.user_list.length}人在线</span></div>
            <ol id="user_list">
                {
    				this.props.user_list.map(function(result) {
    					return <li key={result.id}><a href="#" title={result.name} onclick={this.li_onclick}>{result.name}</a></li>;
    				})
    			}
            </ol>
            </div>
        );
    }
});
