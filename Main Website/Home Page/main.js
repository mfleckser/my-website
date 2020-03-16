var current = JSON.parse(localStorage.getItem("current"));
var records = JSON.parse(localStorage.getItem("records"));
var users = [];
updateUsers();
window.onload = update();

function update() {
	if(current) {
		localStorage.removeItem(current[1]);
		localStorage.setItem(current[1],JSON.stringify(current));
		alert("Welcome, "+current[0]);
	}//end if
	updateRecords();
	localStorage.removeItem("records");
	localStorage.setItem("records", JSON.stringify(records));
}//end update

function loadHighScores() {
	var pf = document.getElementById("platformerhs");
	var ms = document.getElementById("minesweeperhs");
	var si = document.getElementById("space_invadershs");
	var sn = document.getElementById("snakehs");
	if(current[3] > 9999999999998) {
		pf.innerHTML = "Not played yet.";
	} else {
		pf.innerHTML = current[3] + " deaths.";
	}//end if else
	if(current[4] > 9999999999998) {
		ms.innerHTML = "Not played yet.";
	} else {
		ms.innerHTML = current[4] + " seconds.";
	}//end if else
	if(current[5] < 0) {
		si.innerHTML = "Not played yet.";
	} else {
		si.innerHTML = current[5] + " points.";
	}//end if else
	if(current[6] < 0) {
		sn.innerHTML = "Not played yet.";
	} else {
		sn.innerHTML = current[6] + " points.";
	}//end if else
}//end load high scores

function loadRecords() {
	updateRecords();
	localStorage.removeItem("records");
	localStorage.setItem("records", JSON.stringify(records));
	var pf = document.getElementById("platformerRecord");
	var ms = document.getElementById("minesweeperRecord");
	var si = document.getElementById("spaceInvadersRecord");
	var sn = document.getElementById("snakeRecord");
	
	pf.innerHTML = records.platformer[0] + " : " + records.platformer[1];
	ms.innerHTML = records.minesweeper[0] + " : " + records.minesweeper[1];
	si.innerHTML = records.spaceInvaders[0] + " : " + records.spaceInvaders[1];
	sn.innerHTML = records.snake[0] + " : " + records.snake[1];
}//end load records

function updateRecords() {
	updateUsers();
	//platformer
	for(var i = 0; i < users.length; i++) {
		if(users[i][3] < records.platformer[1]) {
			records.platformer[1] = users[i][3];
			records.platformer[0] = users[i][1];
		}//end if
	}//end for
	//minesweeper
	for(var i = 0; i < users.length; i++) {
		if(users[i][4] < records.minesweeper[1]) {
			records.minesweeper[1] = users[i][4];
			records.minesweeper[0] = users[i][1];
		}//end if
	}//end for
	//space invaders
	for(var i = 0; i < users.length; i++) {
		if(users[i][5] > records.spaceInvaders[1]) {
			records.spaceInvaders[1] = users[i][5];
			records.spaceInvaders[0] = users[i][1];
		}//end if
	}//end for
	//snake
	for(var i = 0; i < users.length; i++) {
		if(users[i][6] > records.snake[1]) {
			records.snake[1] = users[i][6];
			records.snake[0] = users[i][1];
		}//end if
	}//end for
}//end update records

function updateUsers() {
	for(var i = 0; i < localStorage.length; i++) {
		if(localStorage.key(i) !== "current" && localStorage.key(i) !== "records" && localStorage.key(i) !== "mfleckser") {
			users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}//end if
	}//end for
}//end update users

function resetRecords() {//only if records stop working, put in console
	localStorage.setItem("records", '{"platformer": ["", 9999999999], "minesweeper": ["", 9999999999], "spaceInvaders": ["", 0], "snake": ["", 0]}');
}//end reset records