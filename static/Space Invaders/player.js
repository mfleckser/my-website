class Player {
	Player = function(tempX, tempSize) {
		this.x = tempX;
		this.size = tempSize;
		this.dir = 0;
	}//end constructor

	show = function() {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x - this.size, height - this.size, this.size, this.size);
	}

	move = function(dir) {
		this.x += dir * 10;
		if(this.x > width) {
			this.x = width;
		}//end if
		if(this.x < this.size) {
			this.x = this.size;
		}//end if
	}//end move
}//end player class