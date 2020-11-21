function toggleStickyClass($element, sticky) {
    if (sticky) {
        $element.removeClass("stick-none");
        $element.addClass("stick");
    } else {
        $element.addClass("stick-none");
        $element.removeClass("stick");
    }
}

$(document).ready(function () {
    var $header = $("header");

    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();

        if (windowpos > 0) {
            toggleStickyClass($header, true);
            toggleStickyClass($('body'), true);
        }

        if (windowpos === 0) {
            toggleStickyClass($header, false);
            toggleStickyClass($('body'), false);
        }
    });

    $('#toggleMenu').on('click', function (e) {
        var $this = $('#toggleMenu');
        var $body = $("body");
        var $navEl = $("header nav");

        if ($this.hasClass('is-active')) {
            $this.removeClass('is-active');
            $body.removeClass('mobile-menu-expanded');
            $body.addClass('mobile-menu-collapsed');
        } else {
            $this.addClass('is-active');
            $body.addClass('mobile-menu-expanded');
            $body.removeClass('mobile-menu-collapsed');
        }
    })
});

//apply sticky classes for menu
$(window).on('load', function () {
    var windowpos = $(window).scrollTop().toFixed();
    var $header = $("header");

    if (windowpos > 0) {
        toggleStickyClass($header, true);
        toggleStickyClass($('body'), true);
    }
})

$(function () {
    $('a.hero-scroll-down').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 95 }, 1000, 'easeInOutQuart');
    });
});
