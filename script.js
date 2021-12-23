let hamburger = $('.hamburger');
hamburger.click(hamburgerSwitch);

function hamburgerSwitch() {
    $('.sidebar').toggleClass("sidebar-off");
    $('.navbar').toggleClass("navbar-minimized");
    $('main').toggleClass("main-full");
    $('.blanket').toggleClass("blanket-on");
}