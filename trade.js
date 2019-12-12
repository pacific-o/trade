
$(".movable-polygon").hover(function() {
	$(".movable-polygon").toggleClass("animation-pause");
	});



$(window).resize(function () {
	if ($(window).width() < 800) {
		$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2000px") {
		$(".laracast").css("margin-left","+=2000px");
	}else { 
	$(".laracast").css("margin-left","-=400px");
	};
});

	}else {
		$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2400px") {
		$(".laracast").css("margin-left","+=2400px");
	}else { 
	$(".laracast").css("margin-left","-=600px");
	};
});

	}
});


$(window).resize(function () {
	if ($(window).width() < 800) {
		$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2000px");
	}else { 
	$(".laracast").css("margin-left","+=400px");
	};
});

	}else {
		$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2400px");
	}else { 
	$(".laracast").css("margin-left","+=600px");
	};
});

	}
});



$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2400px") {
		$(".laracast").css("margin-left","+=2400px");
	}else { 
	$(".laracast").css("margin-left","-=600px");
	};
});

$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2400px");
	}else {
	$(".laracast").css("margin-left","+=600px");
		};
});