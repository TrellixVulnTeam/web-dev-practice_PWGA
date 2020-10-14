$(document).ready(function(){
    let cover_height = $('#cover-image').height();

    // Check on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > cover_height) {
            $("#backtotop").addClass('visible');
        }
        else {
            $("#backtotop").removeClass('visible');
        }
    });

    // Check on refresh
    if ($(window).scrollTop() > cover_height) {
        $("#backtotop").addClass('visible');
    }
    else {
        $("#backtotop").removeClass('visible');
    }
});