var proj = document.getElementById("projbtn");
var high = document.getElementById("highbtn");
var record = document.getElementById("recordbtn");
var settings = document.getElementById("settings");
var display;
var links = document.getElementById("projects");
var scores = document.getElementById("scores");
function Select(btn) {
	switch(btn) {
		case 1:
			proj.classList.add("select");
			proj.classList.remove("unselect");
			high.classList.remove("select");
			high.classList.add("unselect");
			record.classList.remove("select");
			record.classList.add("unselect");
			break;
		case 2:
			high.classList.add("select");
			high.classList.remove("unselect");
			proj.classList.remove("select");
			proj.classList.add("unselect");
			record.classList.remove("select");
			record.classList.add("unselect");
			current = JSON.parse(localStorage.getItem("current"));
			break;
		case 3:
			record.classList.add("select");
			record.classList.remove("unselect");
			high.classList.remove("select");
			high.classList.add("unselect");
			proj.classList.remove("select");
			proj.classList.add("unselect");
			break;
	}//end switch
	display = btn;
	show();
}//end select

function show() {
	var shown = document.getElementById("shown");
	switch(display) {
		case 1:
			shown.innerHTML = '<div id = "projects"><h1>Projects</h1><ul><li><a href = "file:///Users/23mfleckser/Documents/Programming/Web%20stuff/Platformer/index.html" target = "_blank"><img src = "pics/platformer.png"></a></li><li><a href = "file:///Users/23mfleckser/Documents/Programming/Web%20stuff/Minesweeper/index.html" target = "_blank"><img src = "pics/minesweeper.png"></a></li><li><a href = "file:///Users/23mfleckser/Documents/Programming/Web%20stuff/Calculator/Calculator.html" target = "_blank"><img src = "pics/calculator.png"></a></li><li><a href = "file:///Users/23mfleckser/Documents/Programming/Web%20stuff/Space%20Invaders/index.html" target = "_blank"><img src = "pics/invaders.png"></a></li><li><a href = "file:///Users/23mfleckser/Documents/Programming/Web%20stuff/My%20Snake/index.html" target = "_blank"><img src = "pics/snake.png"> </a></li></ul></div>';
			break;
		case 2:
			shown.innerHTML = '<div id = "scores"><h1>High Scores</h1><div id = "highscores">Platformer: <span id = "platformerhs"></span></br>Minesweeper: <span id = "minesweeperhs"></span></br>Space Invaders: <span id = "space_invadershs"></span></br>Snake: <span id = "snakehs"></span></br></div></div>';
			loadHighScores();
			break;
		case 3:
			shown.innerHTML = '<div id = "records"><h1>Records</h1></br><span class = "label">Platformer</span></br><span id = "platformerRecord" class = "gameRecord"></span></br><span class = "label">Minesweeper</span></br><span id = "minesweeperRecord" class = "gameRecord"></span></br><span class = "label">Space Invaders</span></br><span id = "spaceInvadersRecord" class = "gameRecord"></span></br><span class = "label">Snake</span></br><span id = "snakeRecord" class = "gameRecord"></span></div>';
			loadRecords();
			break;
	}//end switch
}//end show