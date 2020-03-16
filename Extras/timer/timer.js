var timer = document.getElementById("time");
var hours1 = 0;
var hours2 = 0;
var mins1 = 0;
var mins2 = 0;
var secs1 = 0;
var secs2 = 0;
var t;

var running = false;

function update() {
	if(secs2 >= 10) {
		secs2 = 0;
		secs1++;
	}//end if
	if(secs1 >= 6) {
		secs1 = 0;
		mins2++;
	}//end if
	if(mins2 >= 10) {
		mins2 = 0;
		mins1++;
	}//end if
	if(mins1 >= 6) {
		mins1 = 0;
		hours2++;
	}//end if
	if(hours2 >= 10) {
		hours2 = 0;
		hours1++;
	}//end if
	timer.innerHTML = hours1 + "" + hours2 + ":" + mins1 +""+ mins2 +":"+ secs1+""+secs2;
	secs2++;
}//end update

function start() {
	t = setInterval(update, 1000);
	running = true;
}//end start

function stop() {
	clearInterval(t);
	running = false;
}//end stop

function reset() {
	hours1 = 0;
	hours2 = 0;
	mins1 = 0;
	mins2 = 0;
	secs1 = 0;
	secs2 = 0;
}//end reset

document.addEventListener("keydown",keyDown);

function keyDown(e) {
	if(e.keyCode == 32) {
		toggle();
	}//end if
	if(e.keyCode == 82) {
		reset();
		update();
	}//end if
}//end keyDown

function toggle() {
	if(running) {
		stop();
	} else {
		start();
	}//end if else
}//end toggle