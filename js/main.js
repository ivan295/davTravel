(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown')
                    .on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    })
                    .on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });

            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Scroll Effects
    // $(window).scroll(function () {

    //     // Back To Top
    //     if ($(this).scrollTop() > 100) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    //     // Navbar Fixed Effect
    //     if ($(this).scrollTop() > 60) {
    //         $('.navbar').addClass('navbar-scrolled');
    //     } else {
    //         $('.navbar').removeClass('navbar-scrolled');
    //     }

    // });
    $(window).scroll(function () {

    if ($(window).width() >= 992) {

        if ($(this).scrollTop() > 60) {

            $('.navbar').addClass('navbar-scrolled');

        } else {

            $('.navbar').removeClass('navbar-scrolled');

        }

    }

});


    // Back To Top Click

    $('.back-to-top').click(function () {

        $('html, body').animate(
            { scrollTop: 0 },
            1500,
            'easeInOutExpo'
        );

        return false;

    });


    // Date and time picker

    $('.date').datetimepicker({
        format: 'L'
    });

    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel

    $(".testimonial-carousel").owlCarousel({

        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,

        responsive: {

            0: {
                items: 1
            },

            576: {
                items: 1
            },

            768: {
                items: 2
            },

            992: {
                items: 3
            }

        }

    });
    $('.counter').each(function () {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        $({
            countNum: 0
        }).animate({
        countNum: countTo
        },
        {
            duration: 2500,
            easing: 'swing',
            step: function () {
                $this.text(
                    Math.floor(this.countNum).toLocaleString()
                );
            },
            complete: function () {
                $this.text(
                    Number(this.countNum).toLocaleString() + "+"
                );
            }
        });
    });

})(jQuery);