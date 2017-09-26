var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 220;
var y = 450;
var sx = x + 0;
var sy = y + -10;

ctx.fillRect(x, y, 30, 30)

var shoot = function() {
	if (sy >= 472) {
		var sy = y + -10;
	} else {
		setInterval(function() {
			ctx.clearRect(x, sy, 10, 10)
			sy -= 7;
			ctx.fillRect(x, sy, 10, 10)
		}, 10);
	}
}

function moveLeft() {
	if (x <= 0) {
		x = 0;
	}
	ctx.clearRect(x, y, 30, 30);
	x -= 5
	ctx.fillRect(x, y, 30, 30);
}

function moveRight() {
	if (x >= 472) {
		x = 472;
	}
	ctx.clearRect(x, y, 30, 30);
	x += 5
	ctx.fillRect(x, y, 30, 30);
}

document.onkeydown = function(e) {
	e = e || window.event;
	var key = e.which || e.keyCode;
	if (key === 32) {
		shoot();
	} else if (key === 37) {
		moveLeft();
	} else if (key === 39) {
		moveRight();
	}
}

// var y = 0
// setInterval(function() {
// 	if (y < 50) {
// 		ctx.clearRect(y, y, 30, 30);
// 		y += 0.2
// 		ctx.fillRect(y, y, 30, 30);
// 	}
// }, 10);
