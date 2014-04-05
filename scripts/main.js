/*
main.js
*/

(function() {
    $(window).scroll(function() {
        // console.log('about scrollTop: ' + $('#about').scrollTop());
        if ($(window).height() < ($(window).scrollTop() + $('#navBar').outerHeight())) {
            $('#navBar').css('position', 'fixed').css('top', 0).css('bottom', 'auto');
        } else {
            $('#navBar').css('position', 'absolute').css('top', 'auto').css('bottom', 0);
        }
    });

    $('.navButton').each(function() {
        $(this).click(function() {
            var target = $('#' + $(this).attr('data-target'));
            $('body, html').animate({scrollTop: target.offset().top - $('#navBar').outerHeight()}, 500);
        }); 
    })
})()