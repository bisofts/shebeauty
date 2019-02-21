var cont_size_1 = 1.25; //768*960
var cont_size_2 = 0.576; //660*380
$(document).ready(function() {
    $(document).on('click', '.menu-mobile-toggle', function(e) {
        e.preventDefault();
        $('body').addClass('open-sidebar');
    });
    $(document).on('click', '.sidebar-close, .sidebar-close-bg', function(e) {
        $('body').removeClass('open-sidebar');
    });
    //backt-to-top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.back-top-btn').fadeIn();
        }
        else {
            $('.back-top-btn').fadeOut();
        }
    });
    $('.back-top-btn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
    //slider
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        adaptiveWight: true,
        arrows: false,
        dots: true
    });
    $('.productImgSlide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        adaptiveWight: true,
        arrows: true,
        dots: true
    });
    $('.suggest-list').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveWight: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //is-tab
    $(function(){
        $('.tab-selector').click(function(e){
            e.preventDefault();
            if (!$(this).hasClass('drop-active')) {
                $('a').removeClass('drop-active');
            }
            if($(this).hasClass('drop-active')) {
                $(this).removeClass('drop-active');
            }
            else {
                $(this).addClass('drop-active');
            }
        });
        $('.tab-selector').text($('.is-dropdown .active a').text());
        $('.dropdown .is-dropdown li a').click(function(e){
            e.preventDefault();
            $('.tab-selector').text($(this).text());
            $('.tab-selector').removeClass('drop-active');
        });

    });
    //setsize
    function setSizes(imgClass, prop) {
        var containerW = $(imgClass).width();
        $(imgClass).height(containerW * prop);
    }
    setSizes('.product-thumnail', cont_size_1);
    $(window).resize(function() {
        setSizes('.product-thumnail', cont_size_1);
    });
    setSizes('.news-thumnail', cont_size_1);
    $(window).resize(function() {
        setSizes('.news-thumnail', cont_size_1);
    });
});
