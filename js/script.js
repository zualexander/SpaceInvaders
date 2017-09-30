var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d");

// Global variables


//PLAYER
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 30;
var x = canvas.width/2; //player poition x
var y = canvas.height - PLAYER_HEIGHT ; //player position y

//Bullet Position
var sx = x   ; //XPoition of user bullet origin
var sy = y - PLAYER_HEIGHT/2 ;//YPosition of user bullet origin.
const BULLET_SIZE = 10;


//Monster
const MONSTER_HEIGHT =30;
const MONSTER_WIDTH = 30;
var mx = 50;
var my = 50;
const COLUMNS = 6;
const ROWS = 3;

//Drawing Monster Squares
for(var h=0; h < ROWS; h++){
	for(var i = 0; i <= COLUMNS;i++  ){
		ctx.fillRect(mx + i*60, my + 50*h, MONSTER_WIDTH, MONSTER_HEIGHT);
	}
}


// Player square
ctx.fillRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);

var bulletMovement;

// Shooting function for the player
var shoot = function() {

	if (sy >= 0) { // Checks if the bullet is passed the end of the screen.
		if (bulletMovement) return;

		bulletMovement = setInterval(function() {
			ctx.clearRect(sx, sy, BULLET_SIZE, BULLET_SIZE);
			sy -= BULLET_SIZE;
			ctx.fillStyle = "yellow";
			ctx.fillRect(sx , sy, BULLET_SIZE, BULLET_SIZE);
		}, 10)
	} else { // if the bullets are passed the end of the screen, set the position to normal and erase the square.
		ctx.clearRect(sx, sy, BULLET_SIZE, BULLET_SIZE)
		sx = x  ; //XPoition of user bullet origin
		sy = y - PLAYER_HEIGHT/2 ;//YPosition of user bullet origin.
	}
}

// This function is called when moving left(player)
function moveLeft() {
	ctx.fillStyle = "black";
	if (x >= 2) { // Collision detection on the left side
		ctx.clearRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
		x -= 5
		ctx.fillRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
	}	
}

// Function for moving right(player)
function moveRight() {
	ctx.fillStyle = "black";
	if (x <= 475) { // Collision detection on the right side
		ctx.clearRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
		x += 5
		ctx.fillRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
	}
	
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
