// JavaScript Document
// JavaScript Document
$(function(){
    $(".page_left").bind("click",function(){banner_slid("left")});
    $(".page_right").bind("click",function(){banner_slid("right")});
    
    setInterval(function(){
        banner_slid("right");
    },10000);
    
    /*direction:left||right*/
    function banner_slid(direction){
        var float_targ = $(".index_sub_banner>ul");
        
        if(!float_targ.is(":animated")){
            var banner_w = $(".index_sub_banner ul li").width();
            var banner_h = $(".index_sub_banner ul li").height();
            
            $(".index_sub_banner").height(banner_h + "px");
            
            var banner_num = $(".index_sub_banner ul li").length;
            var banner_total_w = banner_w*banner_num;
            
            float_targ.css("width",banner_total_w);
            $(".index_sub_banner ul li").css("width",banner_w);
            
            var current_left = parseInt(float_targ.css("left").split("px")[0]);

            if(direction === "left"){
                if(current_left === 0){
                    float_targ.css("left",-banner_total_w/2+"px");
                }
                
                current_left += banner_w;
                
                float_targ.animate({ left: "+="+banner_w+"px" }, 1000,function(){
                    var after_left = parseInt(float_targ.css("left").split("px")[0]);
                    
                    if(after_left <= -banner_total_w/2){
                        float_targ.css("left",-banner_total_w/2+"px");
                    }
                });
                
                /*banner_dote_cange('right');*/
            }else{
                current_left += banner_w;
                
                float_targ.animate({ left: "-="+banner_w+"px" }, 1000,function(){
                    var after_left = parseInt(float_targ.css("left").split("px")[0]);
                    
                    if(after_left <= -banner_total_w/2){
                        float_targ.css("left","0px");
                    }
                });
                
                /*banner_dote_cange('left');*/
            }
            
        }    
    }
    
    
})