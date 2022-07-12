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

// Contact icon hover change
$(".contact-icon").hover(function () {
        // over
        $(this).css("color", "#4e4c48");
    }, function () {
        // out
        $(this).css("color", "#31302E");
    }
);

// Contact icon change visibility of link
$(".fa-github").hover(function () {
        // over
        $(".git").css("visibility", "visible");
    }, function () {
        // out
        $(".git").css("visibility", "hidden");
    }
);

$(".fa-linkedin").hover(function () {
    // over
    $(".linked").css("visibility", "visible");
}, function () {
    // out
    $(".linked").css("visibility", "hidden");
}
);

$(".fa-instagram").hover(function () {
    // over
    $(".ig").css("visibility", "visible");
}, function () {
    // out
    $(".ig").css("visibility", "hidden");
}
);

$(".fa-envelope").hover(function () {
    // over
    $(".mail").css("visibility", "visible");
}, function () {
    // out
    $(".mail").css("visibility", "hidden");
}
);

// Change about pictures
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
