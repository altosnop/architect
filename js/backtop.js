let $btnTop = $('#back-top');
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 1080) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});

$btnTop.on('click', function () {
    $('html, body').animate({scrollTop:0}, 900)
});