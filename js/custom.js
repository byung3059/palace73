$(function () {

    $('main').fullpage({

        scrollingSpeed: 500,
        anchors: ['main', 'design', 'desc', 'content', 'project', 'samsung', 'map', 'footer'],
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

            if (idx == 3) {
                $('.video_box').addClass('on');
                $('.video_box').v_play();

            } else {
                $('.video_box').removeClass('on');
                $('.video_box').v_pause();
            }

            if (idx === 4) {
                $('.header').addClass('content');
                $('.main_content .content_top .img_box').addClass('on');
                $('.main_content .content_bottom .img_box').addClass('on');
            } else {
                $('.header').removeClass('content');
            }

            if (idx === 5) {
                $('.main_project .inner .img_box').addClass('on');
            }

            if (idx === 6) {
                $('.header').addClass('samsung');
                $('.main_samsung .inner .s_inner .img_box').addClass('on');
            } else {
                $('.header').removeClass('samsung');
            }

            if (idx === 7) {
                $('.header').addClass('map');

            } else {
                $('.header').removeClass('map');
            }

            if (idx === 8) {
                $('.main_samsung .inner .itm').addClass('on');
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

    $('.video_box').vimeo_player({
        videoURL: 'https://player.vimeo.com/video/940651321?background=1&loop=1&autopause=0&quality=1080p',
        containment: 'self',
        showControls: false,
        playOnlyIfVisible: false,
        useOnMobile: true,
        loop: true,
    });





    feather.replace();





})