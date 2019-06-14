$(function(){
	$("body").before("<div id='scroll_top'></div>");
	
    $(".menu li").bind("mouseover",function(){
        $(".menu .sub_bar").removeClass("show");
        $(".menu .sub_bar").addClass("hidden");
        $(this).children(".sub_bar").removeClass("hidden");
        $(this).children(".sub_bar").addClass("show");
    });
    
    $(".menu .sub_bar").bind("mouseleave",function(){
        $(this).addClass("hidden");
        $(this).removeClass("show");
    });
    
	/*right bar*/
	$(".right_bar li").bind("mouseover",function(){
        $(".right_bar .left_icon_cont").removeClass("show");
        $(".right_bar .left_icon_cont").addClass("hidden");
        $(this).children(".left_icon_cont").removeClass("hidden");
        $(this).children(".left_icon_cont").addClass("show");
    });
    
    $(".right_bar .left_icon_cont").bind("mouseleave",function(){
        $(this).addClass("hidden");
        $(this).removeClass("show");
    });
	
    /*$(".title2 li").mouseover(function(){
        $(".title2 li").css("background","#333");
        $(this).css("background","#444");
    });*/
    
    $(".banner_login_content_and_bg .bar_close").bind("click",function(event){
        romove_bg_mask();
        $(this).parents(".banner_login_content").removeClass("show");
        $(this).parents(".banner_login_content").addClass("hidden");
        
        event.stopPropagation();
    });
    
    $(".att_barcode li").mouseover(function(){
        var barcode_2d = $(this).children(".barcode_2d");
        barcode_2d.removeClass("hidden");
        barcode_2d.addClass("show");
    }).mouseleave(function(){
        var barcode_2d = $(this).children(".barcode_2d");
        barcode_2d.removeClass("show");
        barcode_2d.addClass("hidden");
    });
    
    /*login start*/
    $(".txt_apply").bind("click",function(event){
        remove_login();
        add_register()
        event.stopPropagation();
    });
    
    $("#login_bar .btn_submit").click(function(){
        remove_login();        
        $("#bind_tips").addClass("show");
        $("#bind_tips").removeClass("hidden");
    });
    
    $("#free_application").click(function(){
        add_bg_mask();
        add_register();
    });
    
    $("#login_quick").click(function(){
        add_bg_mask();
        add_login();
    });
    /*login end*/
});

function add_login(){
    $("#login_bar").removeClass("hidden");
    $("#login_bar").addClass("show");
}

function remove_login(){
    $("#login_bar").removeClass("show");
    $("#login_bar").addClass("hidden");
}

function add_register(){
    $("#register").removeClass("hidden");
    $("#register").addClass("show");
}

function remove_register(){
    $("#register").removeClass("show");
    $("#register").addClass("hidden");
}

function add_bg_mask(){
    $(".bg_mask").removeClass("hidden");
    $(".bg_mask").addClass("show");
}

function romove_bg_mask(){
    $(".bg_mask").removeClass("show");
    $(".bg_mask").addClass("hidden");
}

function log(a){
    console.log(a);
};