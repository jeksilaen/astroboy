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

//About image hover change
$(".about-img").hover(function () {
    // over
    let attr = (this.classList[1]); 
    changeAbout(attr);
}, function () {
    // out
    $(".me").attr("src", "images/me.png");
    $(".school").attr("src", "images/school.png");
    $(".goals").attr("src", "images/goals.png");
}
);

//Project button hover change   
$(".project-button").hover(function () {
        // over
        $(this).css("background-color", "#53524f");
    }, function () {
        // out
        $(this).css("background-color", "#31302E");
    }
);

function changeAbout(attr){
    switch (attr) {
        case "me":
            $(".me").attr("src", "images/me2.png");
            break;
        case "school":
            $(".school").attr("src", "images/school2.png");
            break;
        case "goals":
            $(".goals").attr("src", "images/goals2.png");
            break;
        default:
            break;
    }
}
