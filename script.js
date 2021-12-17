let hamburger = $('.hamburger');

hamburger.click(function() {
    $('.sidebar').toggleClass("sidebar-off")
    $('main').toggleClass("main-full");
});