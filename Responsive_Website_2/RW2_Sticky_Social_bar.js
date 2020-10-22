$('document').ready(function (){
    let sticky_social_bar = $("#sticky-social-icon");
    let cover_height = $('#cover-image').height();
    let d_flex = "d-flex";
    let d_none = "d-none";

    // Check on scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > cover_height){
            sticky_social_bar.removeClass(d_none);
            sticky_social_bar.addClass(d_flex);
        }
        else {
            sticky_social_bar.addClass(d_none);
            sticky_social_bar.removeClass(d_flex);
        }
    });

    // Check on refresh
    if($(window).scrollTop() > cover_height){
        sticky_social_bar.removeClass(d_none);
        sticky_social_bar.addClass(d_flex);
    }
    else {
        sticky_social_bar.addClass(d_none);
        sticky_social_bar.removeClass(d_flex);
    }
});