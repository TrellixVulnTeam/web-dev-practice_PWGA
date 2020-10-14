$(document).ready(function(){
    let nav = $(".navbar.navbar-dark");
    var fixed_top = "fixed-top";
    let header_height = $('#header').height() + 50;
    $(window).scroll(function(){
        if($(window).scrollTop() > header_height) {
            nav.addClass(fixed_top);
            console.log("check");
        }
        else {
            nav.removeClass(fixed_top);
            console.log("check2");
        }
    });

    // Check on refresh
    if ($(window).scrollTop() > header_height){
        nav.addClass(fixed_top);
    }
    else {
        nav.removeClass(fixed_top);
    }
});