
$(".burger").click(function () {
	$(".nav-bar").toggleClass("visible");
});

$(".movable-polygon").hover(function () {
	$(".movable-polygon").toggleClass("animation-pause");
});

function nextSlide() {
	var length = $(".laracast").css("margin-left");
	if (length === "-2000px") {
		$(".laracast").css("margin-left", "+=2000px");
	} else {
		$(".laracast").css("margin-left", "-=500px");
	};
};

function preSlide() {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left", "-=2000px");
	} else {
		$(".laracast").css("margin-left", "+=500px");
	};
};

$(".right-side").click(preSlide);
$(".left-side").click(nextSlide);
$(".right-slide").click(nextSlide);
$(".left-slide").click(preSlide);

