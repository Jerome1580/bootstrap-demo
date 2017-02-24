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

    })();


    //新闻列表页，点击切换文字
    var _newTitle = $('.news-title');
    $('.nav-pills').on('click','a', function () {
        var _this = $(this);
        var title = _this.data('title');
        _newTitle.text(title);
    });


    //给轮播图注册手指触摸事件，向左滑放下一张，向右滑动放上一张图片
    var _carousels = $('.carousel'); //给页面上的所有轮播图都注册事件
    var statX = 0,endX = 0; //记录开始,结束坐标

    var offset = 50 ;  //设置阈值，避免手指小幅度移动触发事件


    _carousels.on('touchstart',function(e){
         statX =  e.originalEvent.touches[0].clientX;


    }).on('touchmove', function (e) {
        //这个地方不能使用touchend来获取endX，因为离开的瞬间没有值
        //用touchmove时刻获取值，变量覆盖的思路获取最后离开的endX
        endX =  e.originalEvent.touches[0].clientX;


        var distance = Math.abs(statX - endX );   //判断手指滑动阈值
        if(distance > offset){
             //bootstrap提供的方法 .carousel('prev')实现下一张
            //用$(this),避免网页有多轮播图
            $(this).carousel(statX > endX?'next':'prev');

        }

    })



})