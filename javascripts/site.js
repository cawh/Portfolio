
//mouse hover hero images
$(document).ready(function() {
    $('.projectButton').click(function(){
        $('.wrap').scrollTop(0);
        $('.wrap').toggleClass('fixWrap');
        $('.main').toggleClass('moveMain');
        $('.menu').children('ul').toggleClass('projectDropdownUp');
        $('.menu').children('ul').toggleClass('up20');
        $('.menu').children('ul').toggleClass('down20');
        $('.arrow').toggleClass('invisible');
        $('.chevronDown').toggleClass('rotate180');
    });

    $('.projectButton2').click(function(){
        $('.wrap').scrollTop(0);
        $('.wrap').toggleClass('fixWrap');
        $('.main').toggleClass('moveMain');
        $('.menu').children('ul').toggleClass('projectDropdownUp');
        $('.menu').children('ul').toggleClass('up20');
        $('.menu').children('ul').toggleClass('down20');
        $('.arrow').toggleClass('invisible');
        $('.chevronDown').toggleClass('rotate180');
        $('.menu').children('ul').removeClass('autoHeight');
    });

    $('.wrap').scroll( function(){
        var scroll = $('.wrap').scrollTop();
        if (scroll > 50) {
            $(".eyebrows").addClass("eyebrowsUp");
        } else {
            $(".eyebrows").removeClass("eyebrowsUp");
        }
    });
    if ($(window).width() > 700){

        $('.projectButton').hover(function(){
            $(this).children('.background').toggleClass('backgroundAnimation')

        });

        $('.projects').hover(function() {
            $(this).children('.chevronDown').toggleClass('opaque');
        });
    } else if ($(window).width() < 700){
        //if the top of the image is less than 100px away from the top of the screen
        
        $('.wrap').scroll( function(){
            
            /* Check the location of each desired element */
            $('.projectButton').each( function(i){
                var fadeOffset = 20;
                var bottom_of_object = $(this).offset().top + fadeOffset;
                var bottom_of_window = $('.projectButton').scrollTop() + $('.projectButton').height();
                
                /* If the object is completely visible in the window, fade it it */
                if ( bottom_of_window > bottom_of_object ){
                    $(this).children('.background').addClass('backgroundAnimation');
                    $(this).children('h1').css({
                        'opacity' : '1',
                        'transform' : 'translate(0px,0px)' ,
                    })  ;
                        
                } else if ( bottom_of_window < bottom_of_object ) {
                    $(this).children('.background').removeClass('backgroundAnimation');
                    $(this).children('h1').css({
                        'opacity' : '0',
                        'transform' : 'translate(-4px,0px)' ,
                    })  ;
                }
                
            }); 
        
        });
    }

    $('.projects').click(function() {
        $('.menu').children('ul').toggleClass('autoHeight');
        $('.menu').children('ul').children('li').children('a').toggleClass('opaque');
        $('.chevronDown').toggleClass('rotate180');
    });
    $('.projects').focusout(function() {
      $('.menu').children('ul').removeClass('autoHeight');
      $('.menu').children('ul').children('li').children('a').removeClass('opaque');
      $('.chevronDown').removeClass('rotate180');
    });
    
    $('.momentButton').click(function(){
        $('.moment').css({
            'opacity': '1', 
            'z-index': '9',
            
        });
        $('.moment').children('.projectContents').css({
            'transform': 'translate(0px, 0px) scale(1)',
            'opacity': '1', 
            
        });
        $('body').toggleClass('bodyBlack');
        $('.moment').children('.projectContents').parent('.projectWrap').css ({
            'overflow-y': 'scroll',
        });
    });

    $('.irisButton').click(function(){
        $('.iris').css({
            'opacity': '1', 
            'z-index': '9',
            
        });
        $('.iris').children('.projectContents').css({
            'transform': 'translate(0px, 0px) scale(1)',
            'opacity': '1', 
        });
        $('body').toggleClass('bodyBlack');
        $('.iris').children('.projectContents').parent('.projectWrap').css ({
            'overflow-y': 'scroll',
        });
    });
    $('.arrow').click(function(){
        $('.wrap').scrollTop(0);
        $('.wrap').toggleClass('fixWrap');
        $('.main').toggleClass('moveMain');
        $('.menu').children('ul').toggleClass('projectDropdownUp');
        $('.arrow').toggleClass('invisible');
        $('.chevronDown').removeClass('rotate180');
        $('.projectWrap').css({
            'opacity': '0', 
        });
        $('.projectWrap').children('.projectContents').css({
            'transform': 'translate(0px, 240px) scale(0.8)',
            'opacity': '0', 
        });
        $('.projectWrap').css({
            'overflow-y': 'hidden',
            'z-index': '8',
        });
    });
    $('.projectWrap').scroll( function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 40) {
            $('.arrow').addClass('arrowScrollBottom');
        } else {
            $('.arrow').removeClass('arrowScrollBottom');
        } 
    
    });

});
//parallax for hero images
$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - (window.innerWidth / 2)) / resistance)
        , y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
    });

};

$(document).mousemove(function (e) {
    $('.paralax').parallax(-60, e);
});

//function background blur on scroll
//blur to equal 0
//on scroll take dynamically track how much the user has scrolled. 0% = 0px scroll, 100% = 100vh scroll
//blur image content in relation to how much scroll has been completed, between 0 and x which is a var
//x = ($(window).height()/blurValue)
//$('.projectWrap').scrollTop()/ X
//$('.projectWrap').scrollTop() / ($(window).height() / 24)


