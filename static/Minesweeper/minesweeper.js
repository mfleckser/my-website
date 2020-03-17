alert('Press "i" for instructions.');

//canvas
var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
canv.addEventListener("click", checkClicks);
canv.addEventListener("contextmenu", mark);

//reset button
reset = document.getElementById("reset");
reset.addEventListener("click", restart);

var width = canv.width;
var height = canv.height;
var scl = 50;
var cells = [];
var game_over = false;
var won = false;
var revealed = 0;
var mines = 0;

document.addEventListener("keydown", rules);
function rules(event) {
	if(event.keyCode == 73) {
		alert("Click on a square to reveal it, right click to place a flag. Some of the tiles are bombs, and if a tile isn't a bomb, then the number shown is the amout of hidden bombs adjacent to that tile, including diagonals.");
	}//end if
}//end rules

//creating cells
for(var i = 0; i < width/scl; i++) {
	for(var j = 0; j < height/scl; j++) {
		cells.push(new Cell());
		cells[cells.length-1].Cell(i,j,scl);
	}//end for
}//end for

for(i = 0; i < cells.length; i++) {
	if(cells[i].mine) {
		mines++;
	}//end if
}//end for

//show cells
for(var i = 0; i < cells.length; i++) {
	cells[i].show();
	checkSides(cells[i]);
}//end for

function checkClicks(){
	for(var i = 0; i < cells.length; i++) {
		if(cells[i].clicked()) {
			cells[i].reveal();
			floodFill(cells[i]);
		}//end if
	}//end for
}//end check clicks

function checkSides(test) {
	for(var index = 0; index < cells.length; index++) {
		if(cells[index].mine) {
			if((Math.abs(cells[index].x - test.x)) <= scl && (Math.abs(cells[index].y - test.y) <= scl)) {
				test.total++;
			}//end if
		}//end if
	}//end for
}//end check sides

function floodFill(cell) {
	if(cell.total == 0) {
		for(var index = 0; index < cells.length; index++) {
			if((Math.abs(cells[index].x - cell.x)) <= scl && (Math.abs(cells[index].y - cell.y) <= scl) && !cells[index].displayed) {
				cells[index].reveal();
				if(cells[index].total == 0) {
					floodFill(cells[index]);
				}//end if
			}//end if
		}//end for
	}//end if
}//end floodFill

setInterval(function () {
	if(game_over) {
		for(var i = 0; i < cells.length; i++) {
			cells[i].reveal();
		}//end for
		reset.disabled = false;
		mines++;
		alert("You Lose!");
		clearInterval(t);
		game_over = false;
	}//end if
	if(cells.length - revealed === mines) {
		won = true;
		clearInterval(t);
	}//end if
	if(won) {
		reset.disabled = false;
		alert("You Win!");
		won = false;
		mines++;
		var current = JSON.parse(localStorage.getItem("current"));
		if(current) {
			if(score() < current[4]) {
				current[4] = score();
			}//end if
		}//end if
		localStorage.removeItem("current");
		localStorage.setItem("current",JSON.stringify(current));
	}//end if
}, 10);

function score() {
	points = document.getElementById("time").innerHTML;
	var final = 0;
	final += parseInt(points[0]) * 36000;
	final += parseInt(points[1]) * 3600;
	final += parseInt(points[3]) * 600;
	final += parseInt(points[4]) * 60;
	final += parseInt(points[6]) * 10;
	final += parseInt(points[7]);
	return final;
}//end score

function restart() {
	location.reload();
	reset.disabled = true;
}//end restart

function mark(event) {
	event.preventDefault();
	for(i = 0; i < cells.length; i++) {
		if(cells[i].clicked()) {
			cells[i].reveal(true);
		}//end if
	}//end for
}//end mark