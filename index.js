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


// Project arrow hover change
$(".project-arrow-right").hover(function () {
        // over
        $(".project-arrow-right").css("color", "#31302E");
    }, function () {
        // out
        $(".project-arrow-right").css("color", "#F0F0F0");
    }
);

$(".project-arrow-left").hover(function () {
    // over
    $(".project-arrow-left").css("color", "#31302E");
}, function () {
    // out
    $(".project-arrow-left").css("color", "#F0F0F0");
}
);

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
