$(function(){
    $(".banner_login_title div").bind("click",function(){
        $(".banner_login_frame .banner_login_title div").addClass("bg_grey");
        $(".banner_login_frame .banner_login_title div").removeClass("bg_white");
        $(this).addClass("bg_white");
        $(this).removeClass("bg_grey");
    });
    
    $(".banner_login_title .sign_title").bind("click",function(){
        $(".banner_login_frame .banner_login_content").addClass("hidden");
        $(".banner_login_frame .banner_login_content").removeClass("show");
        
        $("#apply").addClass("show");
        $("#apply").removeClass("hidden");
    });
    
    $(".banner_login_title .login_tile").bind("click",function(){
        $(".banner_login_frame .banner_login_content").addClass("hidden");
        $(".banner_login_frame .banner_login_content").removeClass("show");
        
        $("#login").addClass("show");
        $("#login").removeClass("hidden");
    });
    
    /*downcount*/
    
    /*holiday bar start*/
    var i = 6;
    /*var i = 2;*/
    var timer = setInterval(function(){
        var a = i--;
        if(a < 0){
            clearInterval(timer);
            $(".countdown").removeClass("show");
            $(".countdown").addClass("hidden");
            
            $(".holiday .bar_close").removeClass("hidden");
            $(".holiday .bar_close").addClass("show");
        }else{
            $(".countdown div").html("倒计时:"+a);
        }
    },1000);
    
    $(".holiday .bar_close").bind("click",function(event){
        bg_mask_hidden();
        holiday_hidden();
        event.stopPropagation();
    });
    
    $(".holiday").bind("click",function(){
        apply_cloud_show();
    });
    
    $(".apply_cloud .bar_close").bind("click",function(){
        apply_cloud_hidden();
    });
    
    $(".apply_cloud .btn_submit").bind("click",function(){
        barcode_2d_cloud_show();
        apply_cloud_hidden();
    });
    
    $(".barcode_2d_cloud .bar_close").bind("click",function(){
        barcode_2d_cloud_hidden();
    });
    /*holiday bar end*/
});

function bg_mask_show(){
    $(".bg_mask").removeClass("hidden");
    $(".bg_mask").addClass("show");
}

function bg_mask_hidden(){
    $(".bg_mask").removeClass("show");
    $(".bg_mask").addClass("hidden");
}

function holiday_show(){
    $(".holiday").removeClass("hidden");
    $(".holiday").addClass("show");
}

function holiday_hidden(){
    $(".holiday").removeClass("show");
    $(".holiday").addClass("hidden");
}


function apply_cloud_show(){
    $(".apply_cloud").removeClass("hidden");
    $(".apply_cloud").addClass("show");
}

function apply_cloud_hidden(){
    $(".apply_cloud").removeClass("show");
    $(".apply_cloud").addClass("hidden");
}

function barcode_2d_cloud_show(){
    $(".barcode_2d_cloud").removeClass("hidden");
    $(".barcode_2d_cloud").addClass("show");
}

function barcode_2d_cloud_hidden(){
    $(".barcode_2d_cloud").removeClass("show");
    $(".barcode_2d_cloud").addClass("hidden");
}