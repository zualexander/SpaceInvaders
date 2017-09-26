var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 220;
var y = 450;
var sx = x + 0;
var sy = y + -10;
var mx = 50;
var my = 50;
ctx.fillRect(mx, my, 30, 30);
ctx.fillRect(mx + 60, my, 30, 30);
ctx.fillRect(mx + 120, my, 30, 30);
ctx.fillRect(mx + 180, my, 30, 30);
ctx.fillRect(mx + 240, my, 30, 30);
ctx.fillRect(mx + 300, my, 30, 30);
ctx.fillRect(mx + 360, my, 30, 30);

ctx.fillRect(mx, my + 50, 30, 30);
ctx.fillRect(mx + 60, my + 50, 30, 30);
ctx.fillRect(mx + 120, my + 50, 30, 30);
ctx.fillRect(mx + 180, my + 50, 30, 30);
ctx.fillRect(mx + 240, my + 50, 30, 30);
ctx.fillRect(mx + 300, my + 50, 30, 30);
ctx.fillRect(mx + 360, my + 50, 30, 30);


ctx.fillRect(x, y, 30, 30);

var shoot = function() {
	ctx.fillStyle = "yellow";
	if (sy >= 0) {
		setInterval(function() {
			ctx.clearRect(x, sy, 10, 10)
			sy -= 7;
			ctx.fillRect(x, sy, 10, 10);
			// if (sy >= mx && sy >= my) {
			// 	ctx.clearRect(mx, my, 30, 30);
			// }
		}, 10)
	} else {
		ctx.clearRect(x, sy, 10, 10)
		sx = x + 0;
		sy = y + -10;
	}
}

function moveLeft() {
	ctx.fillStyle = "black";
	if (x <= 0) {
		x = 0;
	}
	ctx.clearRect(x, y, 30, 30);
	x -= 5
	ctx.fillRect(x, y, 30, 30);
}

function moveRight() {
	ctx.fillStyle = "black";
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
