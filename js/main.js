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

            var imgSrc =  isSmallScreen?$item.data('image-xs'):$item.data('image-lg');//�ж��Ƿ���Сͼ
            $item.css('backgroundImage','url("'+imgSrc+'")');

            //�����Сͼ������ҪСͼ��Ϊimg��ǩ�����Ǳ���backImage������img��ǩ�ܸ��ݴ�����������
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