var arraw_left_width = 70;
var arraw_left_height = 40;

var arraw_right_width = 70;
var arraw_right_height = 40;

var close_icon_height = 20;
/*var params = [
    {
        name:".step0",
        position:"left",
        tipwords:0,
    },
    {
        name:".step1",
        position:"left",
        tipwords:1,
    },
    {
        name:".step2",
        position:"left",
        tipwords:2,
    },
    {
        name:".step3",
        position:"left",
        tipwords:3,
    },
    {
        name:".step4",
        position:"left",
        tipwords:4,
    },
    {
        name:".step5",
        position:"left",
        tipwords:5,
    },
    {
        name:".step6",
        position:"left",
        tipwords:6,
    },
    {
        name:".step7",
        position:"left",
        tipwords:7,
    },
    {
        name:".step8",
        position:"left",
        tipwords:8,
    },
    {
        name:".step9",
        position:"left",
        tipwords:9,
    },
];*/

(function($){
    $.extend({
        "guider":function(params){
            $(window).ready(function(){
                var step = 0;
                var element = params[step];
                var ele_length = params.length;

                startTip(element);
                
                $("body").on("click",".tip_next_btn",function(){

                    if(step < ele_length - 1){
                        closeTip();
                        element = params[++step];
                        startTip(element);
                    }else{
                        //some else
                    }
                });
                
                $(window).on("scroll resize",function() {
                    windowresize(element); 
                });
                
                $("body").on("click",".tip_finish_btn,.tip_colse_btn",function(){
                    closeTip();
                });
            });
        },
    });
})(jQuery);

function startTip(ele){
    /*{
        class:".step0",
        position:"left",
    },*/
    $("<div class='tips_mark'></div>").appendTo('body');
    
    var tip = $(ele.name+":eq(0)");
    var arrow_position = ele.position;
    var step = ele.tipbarwords;
    var step1 = ele.tipwords;
    var finish = false;
    if (ele.hasOwnProperty("finish")){
        finish = ele.finish;
    }
    //var arrow_position = 'right';
    
    var top = tip.offset().top;
    var left = tip.offset().left;
    var h = parseInt(tip.css('height').split("px")[0]);
    var w = parseInt(tip.css('width').split("px")[0]);
    
    /*marks*/
    $("<div class='tips' style='position:absolute;width:" + w + "px;height:" + h + "px;top:" + top + "px;left:" + left + "px;box-shadow:0px 0px 1px 10000px rgba(0, 0, 0, 0.6);'></div>").appendTo('body');
    
    /*tips_arrow_txt*/
    var tips_arrow_txt_h = 0;
    var tips_arrow_txt_w = 0;
    if($(".tipbarwords").length){
        var tipbarwords = $("#tipbarwords" + step).clone();
        var tips_arrow_txt = "<div class='tips_arrow_txt'></div></div>";
        
        $(tips_arrow_txt).appendTo('body');
        tipbarwords.appendTo(".tips_arrow_txt");
        tips_arrow_txt_h = parseInt($(".tips_arrow_txt:eq(0)").css('height').split("px")[0]);
        tips_arrow_txt_w = parseInt($(".tips_arrow_txt:eq(0)").css('width').split("px")[0]);
    }
    
    /*arrow*/
    if(arrow_position === 'left'){
        $("<div class='arrow arrow_left' style='position:absolute;top:" + (top + h/2 - arraw_left_height/2) + "px;left:" + (left - arraw_left_width)+ "px;'></div>").appendTo('body');
    
        var t = top + h/2 - tips_arrow_txt_h/2;
        var l = left - arraw_left_width - tips_arrow_txt_w;

        $(".tips_arrow_txt").css({"top":t + "px","left":l + "px"});
    }

    if(arrow_position === 'right'){
        $("<div class='arrow arrow_right' style='position:absolute;top:" + (top + h/2 - arraw_right_height/2) + "px;left:" + (left + w)+ "px;'></div>").appendTo('body');
        
        var arrow_w = parseInt($(".arrow").css('width').split("px")[0]);
        var t = top + h/2 - tips_arrow_txt_h/2;
        var l = left + w + arrow_w;
        
        $(".tips_arrow_txt").css({"top":t + "px","left":l + "px"});
    }
    /*
    if(arrow_position === 'top'){
    }
    
    if(arrow_position === 'bottom'){
    }
    */
    
    /*tips_content*/

    var process_num = $(".tipbarwords").length;
    var process_list = "<ul class='tip_process'>";

    for(var i=1; i<process_num; i++){
        process_list += "<li></li>";
    }
    process_list += "</ul>";
    
    var contro_btn = 'tip_next_btn';
    
    if(finish){
        contro_btn = "tip_finish_btn";
    }
    
    var tips_content = "<div class='tips_content'><div class='tip_colse_btn'>×</div><div class='tip_txt'></div><div class='tip_widge'>"+ process_list +"<div class='"+ contro_btn +"'></div></div></div>";
    $(tips_content).appendTo('body');
    $("#tipwords" + step1).clone().appendTo('.tip_txt');
    //$("#tipbarwords" + step).clone().appendTo('.tip_txt');
    
    $(".tip_process li").removeClass("on");
    $(".tip_process li:eq("+step+")").addClass("on");
}

function windowresize(ele){
    var tip = $(ele.name+":eq(0)");
    var arrow_position = ele.position;
    
    var top = tip.offset().top;
    var left = tip.offset().left;
    var h = parseInt(tip.css('height').split("px")[0]);
    var w = parseInt(tip.css('width').split("px")[0]);

    var tips_arrow_txt_h = parseInt($(".tips_arrow_txt:eq(0)").css('height').split("px")[0]);
    var tips_arrow_txt_w = parseInt($(".tips_arrow_txt:eq(0)").css('width').split("px")[0]);

    $(".tips").css({"top":top+"px","left":left+"px","width": w ,"height":h});

    var t = 0;
    var l = 0;
    if(arrow_position === 'left'){
        $(".arrow").css({"top":(top + h/2 - arraw_left_height/2) + "px","left": (left - arraw_left_width)+ "px"});

        //arrow text position
        t = top + h/2 - tips_arrow_txt_h/2;
        l = left - arraw_left_width - tips_arrow_txt_w;
    }

    if(arrow_position === 'right'){
        $(".arrow").css({"top":(top + h/2 - arraw_right_height/2) + "px","left": (left + w)+ "px"});

        //arrow text position
        var arrow_w = parseInt($(".arrow").css('width').split("px")[0]);
        t = top + h/2 - tips_arrow_txt_h/2;
        l = left + w + arrow_w;
    }

    $(".tips_arrow_txt").css({"top":t + "px","left":l + "px"});

    /*
    if(arrow_position === 'top'){
    }

    if(arrow_position === 'bottom'){
    }
    */
}

function closeTip(){
    $(".tips_mark").remove();
    $(".tips").remove();
    $(".arrow").remove();
    $(".tips_content").remove();
    $(".tips_arrow_txt").remove();
}

function log(a){
    console.log(a);
}