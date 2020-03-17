//canvas
canv = document.getElementById("canvas");
ctx = canv.getContext("2d");
var width = canv.width;
var height = canv.height;

//create player
var player;
player = new Player();
player.Player(width/2, 25);

var bullets = [];
var aliens = [];
var score = 0;

var picture = document.getElementById("pic");

//make aliens
for(i = 1; i < 5; i++) {
	for(j = 1; j < 6; j++) {
		enemy = new Alien;
		aliens.push(enemy);
		enemy.Alien(j * 83, i * 40);
	}//end for
}//end for

document.addEventListener("keydown", keyPush);
document.addEventListener("keyup", keyRelease);

function draw() {
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,width,height);

	player.show();
	player.move(player.dir);

	for(i = 0; i < bullets.length; i++) {
		bullets[i].show();
		for(j = 0; j < aliens.length; j++) {
			if(bullets[i].hits(aliens[j])) {
				bullets[i].y = -100;
				aliens[j].y = -100;
				score++;
			}//end if
		}//end for
	}//end for

	for(i = 0; i < aliens.length; i++) {
		aliens[i].show();
		aliens[i].move();
		if(aliens[i].x > width) {
			for(j = 0; j < aliens.length; j++) {
				aliens[j].y += 30;
				aliens[j].dir = -1;
				aliens[j].move();
			}//end for
		}//end if
		if(aliens[i].x < 0) {
			for(j = 0; j < aliens.length; j++) {
				aliens[j].y += 30;
				aliens[j].dir = 1;
			}//end for
		}//end if
		if(aliens[i].y > height) {
			gameOver();
			aliens.splice(0,aliens.length);
		}//end if
	}//end for

	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Score: " + score, width - 150, 50);
}//end draw

t = setInterval(draw, 1000/15);

function keyPush(event) {
	switch(event.keyCode) {
		case 37:
			player.dir = -1;
			break;
		case 39:
			player.dir = 1;
			break;
		case 32:
			bullet = new Laser();
			bullets.push(bullet);
			bullet.Laser(player.x - player.size/2, height);
	}//end switch
}//end keyPush

function keyRelease(event) {
	if(event.keyCode == 37 || event.keyCode == 39) {
		player.dir = 0;
	}//end if
}//end release

function gameOver() {
	clearInterval(t);
	alert("You score was " + score);
	ctx.drawImage(picture, 0, 0, width, height);
	var current = JSON.parse(localStorage.getItem("current"));
	if(current) {
		if(score > current[5]) {
			current[5] = score;
		}//end if
	}//end if
	localStorage.removeItem("current");
	localStorage.setItem("current",JSON.stringify(current));
}//end gameOver