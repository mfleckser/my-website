//canvas
canv = document.getElementById("canvas");
ctx = canv.getContext("2d");
var width = canvas.width;
var height = canvas.height;

//player map portal lava
var player = new Player();
var map = new Map();
var goal = new Portal();
var lava = new Lava();
player.Player(50,height - 150);
map.Map();
goal.Portal(width - 50, height - 50);
lava.Lava();

var cake = document.getElementById("cake");
var skin = document.getElementById("player");

var deaths = 0;

//event listeners (input)
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

var level = 0;
alert("Arrows to move, space to jump. It can't be that hard, can it? Try to get to the green portal to go to the next level.");

function draw() {
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,width,height);
	
	player.update();
	player.force(0, 0.7); // gravity
	player.show();

	map.show();
	goal.show();
	lava.show();

	ctx.font = "25px Arial";
	ctx.fillStyle = "#5e0000";
	ctx.fillText("Deaths: "+deaths,20,30);

	if(player.hits(goal)) {
		switch(level){
			case 0:
				alert("Not so bad after all. Here are some black platforms to jump on.");
				break;
			case 1:
				alert("Not all fun and games, though. The red lava will kill you.");
				break;
			case 2:
				alert("Now your gaining some momentum!");
				break;
			case 3:
				alert("Hint: ");
				alert("It is possible. That is all you get.");
				break;
			case 4:
				alert("No deaths? I don't think so. Just remember to keep up your momentum.");
				break;
			case 5:
				alert("Finally! I though you'd never make it. Anyways, good job! You had "+deaths+" deaths. My best is none. Here's some cake ... that you can't have.");
				var current = JSON.parse(localStorage.getItem("current"));
				var records = JSON.parse(localStorage.getItem("records"));
				if(current) {
					if(deaths < current[3]) {
						current[3] = deaths;
					}//end if
				}//end if
				localStorage.removeItem("current");
				localStorage.setItem("current",JSON.stringify(current));
				break;
		}//end switch
		level++;
		player.x = 50;
		player.vx = player.ax = 0;
		player.y = height - 150;
	}//end if

	for(var i = 0; i < map.shapes.length; i++) {
		if(player.vy >= 0 && Math.abs((player.y + player.h) - (map.shapes[i][1])) <= 20) {
			if(player.x + player.w > map.shapes[i][0] && player.x < map.shapes[i][0] + map.shapes[i][2]) {
				player.y = map.shapes[i][1] - (player.h + 1);
				player.ay = player.vy = 0;
				player.jumped = false;
			}//end if
		}//end if
	}//end for

	for(var i = 0; i < lava.shapes.length; i++) {
		if(player.x < lava.shapes[i][0] + lava.shapes[i][2] &&
   player.x + player.w > lava.shapes[i][0] &&
   player.y < lava.shapes[i][1] + lava.shapes[i][3] &&
   player.y + player.h > lava.shapes[i][1]) {
			player.x = 50;
			player.y = height - 150;
			deaths++;
		}//end if
	}//end for
}//end draw
window.onload = function() {
	var game = setInterval(draw, 1000/15);
	window.moveTo(0, 0);
	window.resizeTo(screen.width, screen.height);
}//end onload

function keyDown(event) {
	switch(event.keyCode) {
		case 37:
			player.ax = -1;
			break;
		case 65:
			player.ax = -1;
			break;
		case 32:
			if(!player.jumped) {
				player.jump();
			}//end if
			break;
		case 39:
			player.ax = 1;
			break;
		case 68:
			player.ax = 1;
			break;
	}//end switch
}//end key down

function keyUp(event) {
	switch(event.keyCode) {
		case 37:
			player.stop();
			break;
		case 65:
			player.stop();
			break;
		case 32:
			player.ay = 0;
			break;
		case 39:
			player.stop();
			break;
		case 68:
			player.stop();
			break;
	}//end switch
}//end key up