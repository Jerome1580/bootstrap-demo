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



    //��ʾ��������ʼ��
    $('[data-toggle="tooltip"]').tooltip();


    //�����ǩ�Ŀ��
    (function(){
        var ulTab = $('.nav-tabs');
        var sumwidth = 70 ; //��Ϊ���������ul������һ�����������


        ulTab.children().each(function (i, element) {
            sumwidth += $(element).width();
        });



        //���ul�Ŀ�ȴ��ڵ�ǰ��Ļ�Ŀ�ȣ�����ֹ�����
        if(sumwidth > $(window).width()){
            ulTab.css('width',sumwidth)
                .parent().css('overflow-x','scroll');
        }

    })();


    //�����б�ҳ������л�����
    var _newTitle = $('.news-title');
    $('.nav-pills').on('click','a', function () {
        var _this = $(this);
        var title = _this.data('title');
        _newTitle.text(title);
    });


    //���ֲ�ͼע����ָ�����¼������󻬷���һ�ţ����һ�������һ��ͼƬ
    var _carousels = $('.carousel'); //��ҳ���ϵ������ֲ�ͼ��ע���¼�
    var statX = 0,endX = 0; //��¼��ʼ,��������

    var offset = 50 ;  //������ֵ��������ָС�����ƶ������¼�


    _carousels.on('touchstart',function(e){
         statX =  e.originalEvent.touches[0].clientX;


    }).on('touchmove', function (e) {
        //����ط�����ʹ��touchend����ȡendX����Ϊ�뿪��˲��û��ֵ
        //��touchmoveʱ�̻�ȡֵ���������ǵ�˼·��ȡ����뿪��endX
        endX =  e.originalEvent.touches[0].clientX;


        var distance = Math.abs(statX - endX );   //�ж���ָ������ֵ
        if(distance > offset){
             //bootstrap�ṩ�ķ��� .carousel('prev')ʵ����һ��
            //��$(this),������ҳ�ж��ֲ�ͼ
            $(this).carousel(statX > endX?'next':'prev');

        }

    })



})