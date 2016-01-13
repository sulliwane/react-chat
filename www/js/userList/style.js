
var shadow = "rgb(230, 221, 221) 3px 3px 2px, rgb(169, 156, 156) 1px 1px 2px";


function set_style_init(){
    set_user_list_style();
}

//设置user_list模块的样式
function set_user_list_style(){

    $("#userListBox").css("box-shadow",shadow);
    $("#userListBox").css("border-radius","5px");
    $("#userListBox").css("border-style","solid");
    $("#userListBox").css("border-width","1px");
    $("#userListBox").css("border-color","#DED5D5");

    $("#user_list_title").css("font-family","Times");
    $("#user_list_title").css("color","rgb(142, 124, 136)");
    $("#user_list_title").css("margin","0px");
    $("#user_list_title").css("padding-top","6px");
    $("#user_list_title").css("padding-bottom","6px");
    $("#user_list_title").css("padding-left","8px");
    $("#user_list_title").css("border-bottom-style","solid");
    $("#user_list_title").css("border-width","1px");
    $("#user_list_title").css("border-color","#DED5D5");

    $("#onlineNumber").css("font-size","8px");
    $("#onlineNumber").css("margin-left","8px");

    $("#userList").css("list-style-type","none");
    $("#userList").css("padding-left","0px");
    $("#userList").css("padding","2px");
    $("#userList").css("margin-bottom","0px");
    $("#userList").css("overflow","auto");
    $("#userList li").css("text-shadow","1px 1px 1px #e0e0e0");
    $("#userList li").css("color","rgb(156, 133, 133)");
    $("#userList li").css("border-radius","5px");
    $("#userList li").css("margin-top","2px");
    $("#userList li").css("margin-left","3px");
    $("#userList li").css("margin-bottom","2px");
    $("#userList li").css("padding-left","6px");
    $("#userList li").css("margin-top","3px");
    $("#userList li:nth-child(odd)").css("background","rgb(187, 255, 227)");
    $("#userList li:nth-child(odd)").css("color","rgb(156, 133, 133)");

}
