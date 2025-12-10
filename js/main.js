$(document).ready(function () {

    $('.menu-toggle').on('click', function () {
        $('.mobile-menu').toggleClass('show');
    });

    $('#news .news-cards').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 }},
            { breakpoint: 1024,  settings: { slidesToShow: 2 }},
            { breakpoint: 1023,  settings: { slidesToShow: 1 }}
        ]
    });

    $('.reviews-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 }},
            { breakpoint: 1024,  settings: { slidesToShow: 2 }},
            { breakpoint: 1023,  settings: { slidesToShow: 1 }}
        ]
    });

    $('.lang-wrapper .ua a').on('click', function (e) {
        e.preventDefault();
        $('.lang-wrapper .en a').removeClass('is-active');
        $(this).addClass('is-active');
    });

    $('.lang-wrapper .en a').on('click', function (e) {
        e.preventDefault();
        $('.lang-wrapper .ua a').removeClass('is-active');
        $(this).addClass('is-active');
    });

});
