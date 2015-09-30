function notification(title, text, kind) {
	//console.log(icon);
	var color = "", icon = "";

	if (kind == "warning") {
		color = "red";
		icon = "warning";
	}else if (kind == "welcome"){
		icon = "hand-peace-o";
	}else if (kind == "control") {
		icon = "gamepad";
	};

	document.body.insertAdjacentHTML('beforeend', '<div class="notification"><div class="notiIcon">' + ( icon == "" || icon == false || icon == 0 ? '' : '<i class="fa fa-' + icon + '"></i>') + '</div><h1>' + title + '</h1><p>' + text + '</p></div>');

	var noti = document.getElementsByClassName('notification')[document.getElementsByClassName('notification').length - 1];
	noti.style.backgroundColor = color;
	noti.style.opacity = 0;
	//noti.style.zIndex = 100 + document.getElementsByClassName('notification').length;

	noti.style.top = (-1 * noti.offsetHeight) + "px";

	setTimeout(function() {
		noti.style.transition = "all 1s";
		noti.style.webkitTransition = "all 1s";
		noti.style.mozTransition = "all 1s";
		noti.style.msTransition = "all 1s";

		noti.style.opacity = 1;
	}, 10);

	setTimeout(function() {
		noti.style.top = 0;
	}, 20);

	setTimeout(function() {
		noti.style.top = (-1 * noti.offsetHeight) + "px";
	}, 2520);

	setTimeout(function() {
		noti.parentNode.removeChild(noti);
	}, 3520);

}