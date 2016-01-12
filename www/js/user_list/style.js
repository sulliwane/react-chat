
var shadow = "rgb(230, 221, 221) 3px 3px 2px, rgb(169, 156, 156) 1px 1px 2px";


function set_style_init(){
    set_user_list_style();
}

//设置user_list模块的样式
function set_user_list_style(){
    console.log("call set_user_list_style now...");
    var body_width = $("body").width();
    var body_height = $("body").height();
    var user_list_width = $("#user_list").width();
    var user_list_height = $("#user_list").height();

    $("#user_list_box").css("box-shadow",shadow);
    $("#user_list_box").css("border-radius","5px");
    $("#user_list_box").css("border-style","solid");
    $("#user_list_box").css("border-width","1px");
    $("#user_list_box").css("border-color","#DED5D5");

    $("#user_list_title").css("font-family","Times");
    $("#user_list_title").css("color","rgb(142, 124, 136)");
    $("#user_list_title").css("margin","0px");
    $("#user_list_title").css("padding-top","6px");
    $("#user_list_title").css("padding-bottom","6px");
    $("#user_list_title").css("padding-left","8px");
    $("#user_list_title").css("border-bottom-style","solid");
    $("#user_list_title").css("border-width","1px");
    $("#user_list_title").css("border-color","#DED5D5");

    $("#online_number").css("font-size","8px");
    $("#online_number").css("margin-left","8px");

    $("#user_list").css("list-style-type","none");
    $("#user_list").css("padding-left","0px");
    $("#user_list").css("padding","2px");
    $("#user_list").css("margin-bottom","0px");
    $("#user_list").css("overflow","auto");
    $("#user_list li").css("text-shadow","1px 1px 1px #e0e0e0");
    $("#user_list li").css("color","rgb(156, 133, 133)");
    $("#user_list li").css("border-radius","5px");
    $("#user_list li").css("margin-top","2px");
    $("#user_list li").css("margin-left","3px");
    $("#user_list li").css("margin-bottom","2px");
    $("#user_list li").css("padding-left","6px");
    $("#user_list li").css("margin-top","3px");
    $("#user_list li:nth-child(odd)").css("background","rgb(187, 255, 227)");
    $("#user_list li:nth-child(odd)").css("color","rgb(156, 133, 133)");

}
