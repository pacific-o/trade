
/* javascript moving coce

movingItems=document.getElementsByClassName('movable-polygon');

for (var i = 0; i < 6; i++) {

movingItems[i].onmouseover=function animationPause() {

	for (var j = 0; j < 6; j++) {
		movingItems[j].style.animationPlayState = "paused";

	};
};

};

for (var i = 0; i < 6; i++) {

movingItems[i].onmouseout=function animationRun() {

	for (var j = 0; j < 6; j++) {
		movingItems[j].style.animationPlayState = "running";

	};
};

};

*/






/* jquery moving code

$(".movable-polygon").hover(function() {
	$(".movable-polygon").toggleClass("animation-pause");
	});

*/





/* jquery moving code

  $(".movable-polygon").hover(function() {
  	$(".movable-polygon").css("animation-play-state","paused");
  	});
$(".movable-polygon").mouseleave(function() {
	$(".movable-polygon").css("animation-play-state","running");
	});
*/





/* jquery slideshow with different windows widths

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