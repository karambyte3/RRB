$(document).ready(function () {
    var s = $("header nav");
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
});