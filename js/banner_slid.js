// JavaScript Document
$(function(){
    $(".banner_slid .page_left").bind("click",function(){banner_slid("left")});
    $(".banner_slid .page_right").bind("click",function(){banner_slid("right")});
    
    setInterval(function(){
        banner_slid("right");
    },10000);
    
    $(".banner_img .page_bottom span").bind("mouseover",function(){
        var float_targ = $(".banner_slid .banner_img .img_list");

        if(!float_targ.is(":animated")){
            $(".banner_img .page_bottom span").removeClass("banner_img_hover");
            $(this).addClass("banner_img_hover");
                    
            var banner_w = $(".banner_slid").width();
            var banner_num = $(".banner_slid .banner_img ul li").length;
            var banner_total_w = banner_w*banner_num;
            
            float_targ.css("width",banner_total_w);
            $(".banner_slid .banner_img .img_list li").css("width",banner_w);
            
            
            var img_position = (parseInt($(this).attr("name"))-1)*banner_w;
    
            var float_targ = $(".banner_slid .banner_img .img_list");
            float_targ.animate({ left: -img_position+"px" }, 1000);
        }
    });
    
    /*direction:left||right*/
    function banner_slid(direction){
        var float_targ = $(".banner_slid .banner_img .img_list");
        
        if(!float_targ.is(":animated")){
            var banner_w = $(".banner_slid").width();
            var banner_num = $(".banner_slid .banner_img ul li").length;
            var banner_total_w = banner_w*banner_num;
            
            float_targ.css("width",banner_total_w);
            $(".banner_slid .banner_img .img_list li").css("width",banner_w);
            
            var current_left = float_targ.css("left");
            
            if(direction == "left"){
                if(current_left == "0px"){
                    float_targ.css("left",-banner_total_w/2+"px");
                }
                
                current_left += banner_w;
                
                float_targ.animate({ left: "+="+banner_w+"px" }, 1000,function(){
                    var after_left = parseInt(float_targ.css("left").split("px")[0]);
                    
                    if(after_left <= -banner_total_w/2){
                        float_targ.css("left",-banner_total_w/2+"px");
                    }
                });
                
                banner_dote_cange('right');
            }else{
                current_left += banner_w;
                
                float_targ.animate({ left: "-="+banner_w+"px" }, 1000,function(){
                    var after_left = parseInt(float_targ.css("left").split("px")[0]);
                    
                    if(after_left <= -banner_total_w/2){
                        float_targ.css("left","0px");
                    }
                });
                
                banner_dote_cange('left');
            }
            
        }    
    }
    
    function banner_dote_cange(position){
        var cur_dote = $(".banner_img_hover");
        var next_dote = cur_dote.next();
        var prev_dote = cur_dote.prev();
        var dote_num = cur_dote.attr("name")
        
        $(".banner_img .page_bottom span").removeClass("banner_img_hover");    
        if(position == 'left'){
            if(dote_num == 4){
                next_dote = $(".banner_img .page_bottom span:first");    
            }
            
            next_dote.addClass("banner_img_hover");
        }else{
            if(dote_num == 1){
                prev_dote = $(".banner_img .page_bottom span:last");    
            }
            
            prev_dote.addClass("banner_img_hover");
        }
    }
})