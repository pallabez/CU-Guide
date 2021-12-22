let hamburger = $('.hamburger');
hamburger.click(hamburgerSwitch);

function hamburgerSwitch() {
    $('.sidebar').toggleClass("sidebar-off");
    //$('main').toggleClass("main-full");
    $('.blanket').toggleClass("blanket-on");
}