$(function () {

    $('main').fullpage({

        scrollingSpeed: 500,
        anchors: ['main', 'design', 'desc', 'content', 'project', 'map', 'samsung', 'footer'],
        responsiveWidth: 1200,
        responsiveHeight: 700,
        onLeave: function (name, idx) {
            $('.aside .lnb li')
                .eq(idx - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');

            if (idx === 1 || idx === 2) {
                $('.header').addClass('on');
                $('.aside').addClass('on');
            } else {
                $('.header').removeClass('on');
                $('.aside').removeClass('on');
            }
            if (idx === 4) {
                $('.header').addClass('content');

            } else {
                $('.header').removeClass('content');

            }
            if (idx === 6) {
                $('.header').addClass('map');

            } else {
                $('.header').removeClass('map');

            }
        },
    });

    $('.header .inner .mbtn').on('click', function () {

        $(this).toggleClass('on')
        $('.header .inner .gnb').toggleClass('on')

    })

    const main_visual_slide = new Swiper('.visual_slide', {
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
    })

    const main_design_ext_slide = new Swiper('.design_ext_slide', {
        loop: true,
        parallax: true,
        speed: 3000,
    })
    const main_design_space_slide = new Swiper('.design_space_slide', {
        loop: true,
        parallax: true,
    })

    $('.main_design .tit .design_ext .prev').on('click', function () {

        main_design_ext_slide.slidePrev(1000);

    })
    $('.main_design .tit .design_ext .next').on('click', function () {

        main_design_ext_slide.slideNext(1000);

    })
    $('.main_design .tit .design_space .prev').on('click', function () {

        main_design_space_slide.slidePrev(600);

    })
    $('.main_design .tit .design_space .next').on('click', function () {


        main_design_space_slide.slideNext(600);

    })

    $('.main_design .tab_button li button').on('click', function () {

        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on');

        let idx = $(this).parent().index();

        $('.main_design .tap_wrap .tab_con .con')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $('.main_design .tit .arrows')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')
    })



    feather.replace();





})