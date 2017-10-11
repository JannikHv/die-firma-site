/* Globals */
var last_target = $('#about-page');
var last_button = $('header nav ul li #current-page');

$(document).ready(function() {
    $('.main-view').fadeIn(2000);
    $('header').hide().slideDown(1250);
    $('header #logo img').hide().fadeIn(2000);

    /* Check if window is too small to show sidebars */
    if ($(window).width() > 1320)
        $('.main-view .sbar').hide().delay(750).fadeIn(2000);

    $(window).on('resize', function() {
        if ($(this).width() <= 1320)
            $('.main-view .sbar').fadeOut(300);
        else
            $('.main-view .sbar').fadeIn(300);
    });

    $('header #logo img').on('click', function(event) {
        location.reload();
    });

    $('a').on('click', function(event) {
        var target = $(this.getAttribute('href'));

        if (!target.is(last_target)) {
            $(this).attr('id', 'current-page');
            last_target.hide();
            target.fadeIn(1250);
            last_button.attr('id', '');
            last_button = $(this);
        }
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: '0px'
        }, 1000);

        last_target = target;
    });

    $('#rights').click(function(){
        $('#logo').find('img').toggleClass('incomming').toggleClass('outgoing');
    });
});