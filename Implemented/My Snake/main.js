//canvas
var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var apple = document.getElementById("apple");

//dimensions
var width = canv.width;
var height = canv.height;
var scl = 20;
var rows = Math.floor(height / scl);
var cols = Math.floor(width / scl);

//positions and movement
var px = Math.floor(cols / 2);
var py = Math.floor(rows - 1);
var vx = 0;
var vy = -1;
var ax = Math.floor(rows / 2);
var ay = Math.floor(cols / 4);

//tail
var score = 1;
var tail = [];

function draw() {
	px += vx;
	py += vy;

	if(px > cols - 1) {
		restart();
	}//end if
	if(py > rows - 1) {
		restart();
	}//end if
	if(px < 0) {
		restart();
	}//end if
	if(py < 0) {
		restart();
	}//end if

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);

	ctx.fillStyle = "lime";//snake
	ctx.fillRect(px * scl, py * scl, scl, scl);

	for(var i = 0; i < tail.length; i++) {
		var color = 255 - 5 * i;
		if(color < 150) {
			color = 150;
		}//end if
		ctx.fillStyle = "rgba(0, " + color + ", 0)";
		ctx.fillRect(tail[i][0] * scl, tail[i][1] * scl, scl, scl);

		if(tail[i][0] == px && tail[i][1] == py) {
			restart();
		}//end if	
	}//end for

	tail.push([px, py]);
	while(tail.length > score - 1) {
		tail.shift();
	}//end while

	if(px == ax && py == ay) {
		score++;
		tail.push([px, py]);
		resetApple();
	}//end if

	//ctx.fillStyle = "red";//apple
	//ctx.fillRect(ax * scl, ay * scl, scl, scl);
	ctx.drawImage(apple, ax * scl, ay * scl, scl, scl);

	ctx.fillStyle = "white";
	ctx.font = "50px Verdana";
	ctx.fillText(score, 25, height - 25);
}//end draw

window.onload = function() {
	alert("Arrow keys to toggle direction, try to get the apple without running into your tail or the wall.");
	var t = setInterval(draw, 1000/10);
}//end onload

document.addEventListener("keydown", keyPressed);
function keyPressed(e) {
	switch(e.keyCode) {
		case 37:
			if(vx !== -1 && vy !== 0) {
				vx = -1;
				vy = 0;
			}//end if
			break;
		case 38:
			if(vx !== 0 && vy !== -1) {
				vx = 0;
				vy = -1;
			}//end if
			break;
		case 39:
			if(vx !== 1 && vy !== 0) {
				vx = 1;
				vy = 0;
			}//end if
			break;
		case 40:
			if(vx !== 0 && vy !== 1) {
				vx = 0;
				vy = 1;
			}//end if
			break;
	}//end switch
}//end key pressed

function restart() {
	var current = JSON.parse(localStorage.getItem("current"));
	if(current) {
		if(score > current[6]) {
			current[6] = score;
		}//end if
	}//end if
	localStorage.removeItem("current");
	localStorage.setItem("current",JSON.stringify(current));
	
	score = 1;
	tail = [];
	px = Math.floor(cols / 2);
	py = Math.floor(rows - 1);
	vx = 0;
	vy = -1;
	resetApple();
}//end restart

function resetApple() {
	ax = Math.floor(Math.random() * cols);
	ay = Math.floor(Math.random() * rows);
	if((ax == px && ay == py) || tail.includes([ax, ay])) {
		resetApple();
	}//end if
}//end reset apple