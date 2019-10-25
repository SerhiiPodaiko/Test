$('.hamburger').on('click', function () {
    $('.menu').slideToggle(1000);
});

//back-to-top
let btnTop = $(".back-to-top")
$(window).on("scroll", function () {
    if($(window).scrollTop() >= 300){
        btnTop.fadeIn();
    }else {
        btnTop.fadeOut();
    }
});

btnTop.on("click", function () {
    $("html,body").animate({scrollTop:0},900)
});

//scroll-bar
$(window).scroll(function () {
    let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
    $("#progress-bar").width(ratio + '%');
});
