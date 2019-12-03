


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





$(".movable-polygon").hover(function() {
	$(".movable-polygon").toggleClass("animation-pause");
	});





  $(".movable-polygon").hover(function() {
  	$(".movable-polygon").css("animation-play-state","paused");
  	});
$(".movable-polygon").mouseleave(function() {
	$(".movable-polygon").css("animation-play-state","running");
	});
