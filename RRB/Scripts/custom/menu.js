$(document).ready(function () {
    var s = $("header");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();

        if (windowpos + 50 >= pos.top) {
            setTimeout(function () {
                s.removeClass("stick-none");
                s.addClass("stick");
            }, 100);
        }

        if (windowpos === 0) {
            setTimeout(function () {
                s.addClass("stick-none");
                s.removeClass("stick");
            }, 100);
        }

        console.log(windowpos === 0)
    });

    $('#toggleMenu').on('click', function (e) {
        var $this = $('#toggleMenu');
        var $menu = $("header");
        var $navEl = $("header nav");

        if ($this.hasClass('is-active')) {
            $this.removeClass('is-active');
            $menu.removeClass('mobile-menu-expanded');
            $menu.addClass('mobile-menu-collapsed');
        } else {
            $this.addClass('is-active');
            $menu.addClass('mobile-menu-expanded');
            $menu.removeClass('mobile-menu-collapsed');
        }
    })
});