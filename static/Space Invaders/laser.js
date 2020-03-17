class Laser {
	Laser = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		this.r = 5;
	}//end constructor

	show = function() {
		ctx.fillStyle = "#ff1c1c";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
		this.y -= 25;
	}//end show

	hits = function(alien) {
		var dx = this.x - alien.x;
		var dy = this.y - alien.y;
		var distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < this.r + alien.r) {
    			return true;
		} else {
			return false;
		}//end if else
	}//end hits
}//end laser