/**
 * Created by Administrator on 2016/12/27.
 */

$(function(){

    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;



        var $item =  $('#main_ad > .carousel-inner > .item');
        $item.each(function(i,item){
            var $item = $(item);

            var imgSrc =  isSmallScreen?$item.data('image-xs'):$item.data('image-lg');//判断是否是小图
            $item.css('backgroundImage','url("'+imgSrc+'")');

            //如果是小图，则需要小图作为img标签而不是背景backImage，作用img标签能根据窗口自行缩放
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'" alt=""/>');
            }
            else{
                $item.empty();
            }

        })


    }

    $(window).on("resize",resize).trigger('resize');



    //提示工具条初始化
    $('[data-toggle="tooltip"]').tooltip();


    //计算标签的宽度
    (function(){
        var ulTab = $('.nav-tabs');
        var sumwidth = 70 ; //因为本身里面的ul本身有一定距离的缩进


        ulTab.children().each(function (i, element) {
            sumwidth += $(element).width();
        });



        //如果ul的宽度大于当前屏幕的宽度，则出现滚动条
        if(sumwidth > $(window).width()){
            ulTab.css('width',sumwidth)
                .parent().css('overflow-x','scroll');
        }

    })()



})