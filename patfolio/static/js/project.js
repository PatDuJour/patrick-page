/* Project specific Javascript goes here. */
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if($('.navbar-overlay').hasClass('hiding')) {
            return
        }
        if($('.navbar-overlay').hasClass('hidden')) {
            $('.navbar-overlay').toggleClass('hidden')
            $('.navbar-overlay').toggleClass('opacity-0')
            $('.navbar-overlay').toggleClass('opacity-1')
            $('.navbar-overlay').toggleClass('hiding');
            setTimeout(function() {
                $('.navbar-overlay').toggleClass('hiding');
            }, 1000);
        }
        else {
            $('.navbar-overlay').toggleClass('hiding');
            $('.navbar-overlay').toggleClass('opacity-1');
            $('.navbar-overlay').toggleClass('opacity-0');
            setTimeout(function() {
                $('.navbar-overlay').toggleClass('hidden');
                $('.navbar-overlay').toggleClass('hiding');
            }, 1000);
        }
    });
});
