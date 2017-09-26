var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var y = 0
var sx = 0;
var sy = 0;
var hx = 500;
var hy = 500;

var shoot = function() {
	ctx.fillRect(sx, sy, 10, 10)
	ctx.fillRect(hx, hy, 10, 10)
	sx += 5;
	sy += 5;
	hx -= 5;
	hy -= 5;
}

document.onkeydown = function(e) {
	e = e || window.event;
	var key = e.which || e.keyCode;
	if (key === 32) {
		shoot();
	}
}

setInterval(function() {
	if (y < 247) {
		ctx.clearRect(0, 0, 500, 500);
		y += 0.2
		ctx.fillRect(y, y, 30, 30);
	}
}, 10);
