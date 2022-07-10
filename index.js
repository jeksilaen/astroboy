//Title section animation
$(".title").fadeIn();
$(".lead").fadeIn();
$(".title-image").fadeIn();
$(".nav-item").fadeIn();

//Title image hover change
$(".title-image").hover(function () {
        // over
        $(".title-image").attr("src", "images/moon2.png");
    }, function () {
        // out
        $(".title-image").attr("src", "images/moon1.png");
    }
);

