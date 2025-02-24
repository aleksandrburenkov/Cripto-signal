'use strict';

// =======================================================================================
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        center: true,
        startPosition: 1,

        smartSpeed: 5000,
        autoplayTimeout: 15000,
        autoHeight: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 1,
                touchDrag: true,
            },
            1024: {
                items: 1,
            },
            1440: {
                items: 1,
            },
        },
    });
});
