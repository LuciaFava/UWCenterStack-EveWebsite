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
        var navButton = $(this);
        var target = $('#' + navButton.attr('data-target'));

        $(this).click(function() {
            $('body, html').animate({scrollTop: target.offset().top - $('#navBar').outerHeight()}, 500);
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() >= target.offset().top - $('#navBar').outerHeight() && $(window).scrollTop() < target.offset().top + target.outerHeight() - $('#navBar').outerHeight()) {
                select(navButton);
            } 
        });
    });
	
	$('#myCarousel').carousel({
		interval:false
	});

	$('#pauseButton').click(function() {
		$('#myCarousel').carousel('pause');
	});

	$('#playButton').click(function() {
		$('#myCarousel').data('bs.carousel').options.interval=1000;
		$('#myCarousel').carousel('cycle');
	});

    function select(element) {
        $('.navButton.selected').removeClass('selected');
        element.addClass('selected');
    }
})()