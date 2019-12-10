
$(".movable-polygon").hover(function() {
	$(".movable-polygon").toggleClass("animation-pause");
	});



$(window).resize(function () {
	if ($(window).width() < 1400) {
		$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2400px") {
		$(".laracast").css("margin-left","+=2400px");
	}else { 
	$(".laracast").css("margin-left","-=600px");
	};
});

	}else {
		$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2400px") {
		$(".laracast").css("margin-left","+=2400px");
	}else { 
	$(".laracast").css("margin-left","-=1200px");
	};
});

	}
});


$(window).resize(function () {
	if ($(window).width() < 1400) {
		$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2400px");
	}else { 
	$(".laracast").css("margin-left","+=600px");
	};
});

	}else {
		$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2400px");
	}else { 
	$(".laracast").css("margin-left","+=1200px");
	};
});

	}
});



$(".right-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "-2400px") {
		$(".laracast").css("margin-left","+=2400px");
	}else { 
	$(".laracast").css("margin-left","-=1200px");
	};
});

$(".left-slide").click(function () {
	var length = $(".laracast").css("margin-left");
	if (length === "0px") {
		$(".laracast").css("margin-left","-=2400px");
	}else {
	$(".laracast").css("margin-left","+=1200px");
		};
});