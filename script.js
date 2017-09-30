var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d");

// Global variables
var x = 220;
var y = 450;
var sx = x;
var sy = y - 10;
var mx = 50;
var my = 50;

// Draw monster squares
// TODO: Minify code
ctx.fillRect(mx, my, 30, 30);
ctx.fillRect(mx + 60, my, 30, 30);
ctx.fillRect(mx + 120, my, 30, 30);
ctx.fillRect(mx + 180, my, 30, 30);
ctx.fillRect(mx + 240, my, 30, 30);
ctx.fillRect(mx + 300, my, 30, 30);
ctx.fillRect(mx + 360, my, 30, 30);

// Draw second line of monster squares
ctx.fillRect(mx, my + 50, 30, 30);
ctx.fillRect(mx + 60, my + 50, 30, 30);
ctx.fillRect(mx + 120, my + 50, 30, 30);
ctx.fillRect(mx + 180, my + 50, 30, 30);
ctx.fillRect(mx + 240, my + 50, 30, 30);
ctx.fillRect(mx + 300, my + 50, 30, 30);
ctx.fillRect(mx + 360, my + 50, 30, 30);

// Player square
ctx.fillRect(x, y, 30, 30);

var bulletMovement;

// Shooting function for the player
var shoot = function() {
	if (sy >= 0) { // Checks if the bullet is passed the end of the screen.
		if (bulletMovement) return;

		bulletMovement = setInterval(function() {
			ctx.clearRect(sx, sy, 10, 10);

			sy -= 10;

			ctx.fillStyle = "yellow";
			ctx.fillRect(sx, sy, 10, 10);
		}, 10)
	} else { // if the bullets are passed the end of the screen, set the position to normal and erase the square.
		ctx.clearRect(sx, sy, 10, 10)
		sx = x + 0;
		sy = y - 10;
	}
}

// This function is called when moving left(player)
function moveLeft() {
	ctx.fillStyle = "black";
	if (x <= 0) { // Collision detection on the left side
		x = 0;
	}
	ctx.clearRect(x, y, 30, 30);
	x -= 5
	ctx.fillRect(x, y, 30, 30);
}

// Function for moving right(player)
function moveRight() {
	ctx.fillStyle = "black";
	if (x >= 472) { // Collision detection on the right side
		x = 472;
	}
	ctx.clearRect(x, y, 30, 30);
	x += 5
	ctx.fillRect(x, y, 30, 30);
}

// Adds key effects for moving and shooting
document.onkeydown = function(e) {
	e = e || window.event;
	var key = e.which || e.keyCode;
	if (key === 32) { // spacebar
		shoot();
	} else if (key === 37) { // lefft arrow
		moveLeft();
	} else if (key === 39) { // right arrow
		moveRight();
	}
}
