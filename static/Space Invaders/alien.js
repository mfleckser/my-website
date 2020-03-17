class Alien {
	Alien = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		this.r = 15;
		this.dir = 1;
	}//end constructor

	show = function() {
		ctx.fillStyle = "lime";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
	}//end show

	move = function() {
		this.x += this.dir * 3;
	}//end move
}//end alien