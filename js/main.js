/**
 * Created by Administrator on 2016/12/27.
 */

$(function(){

    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        console.log(isSmallScreen)



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

})