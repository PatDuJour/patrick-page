/* Project specific Javascript goes here. */
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if($('.nav-overlay').hasClass('hidden')) {
            $('.nav-overlay').toggleClass('hidden')
            $('.nav-overlay').toggleClass('opacity-0')
            $('.nav-overlay').toggleClass('opacity-1')
            $('.nav-overlay').toggleClass('hiding');
            setTimeout(function() {
                $('.nav-overlay').toggleClass('hiding');
            }, 1000);
        }
        else {
            $('.nav-overlay').toggleClass('hiding');
            $('.nav-overlay').toggleClass('opacity-1');
            $('.nav-overlay').toggleClass('opacity-0');
            setTimeout(function() {
                $('.nav-overlay').toggleClass('hidden');
                $('.nav-overlay').toggleClass('hiding');
            }, 1000);
        }
    });
});
