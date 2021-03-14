  var imgCount = 5;
        var dir = 'images/bg/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array
                images[1] = "bg_1.jpg",
                images[2] = "bg_2.jpg",
                images[3] = "bg_3.jpg",
                images[4] = "bg_4.jpg",
                images[5] = "bg_5.jpg",
        document.getElementById("home").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#nav").addClass("nav-color");
    } else {
        $("#nav").removeClass("nav-color");
    }
});