// JavaScript Document
$(function(){
    $("#btn_login").click(function(){
        $(".bg_mask,#login_bar").removeClass("hidden");
        $(".bg_mask,#login_bar").addClass("show");
        event.stopPropagation();
    });
});