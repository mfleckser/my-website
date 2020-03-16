class Cell {
	Cell = function (xpos,ypos,width) {
		this.x = xpos * width;
		this.y = ypos * width;
		this.w = width;
		this.mine;
		this.total = 0;
		this.displayed = false;
		if(Math.random(1) < 0.15) {
			this.mine = true;
			this.total = null;
		} else {
			this.mine = false;
		}//end if else
	}//end constructor

	show = function() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.w);
		ctx.stroke();
	}//end show

	clicked = function() {
		var mouseX = event.clientX;
		var mouseY = event.clientY;
		if(mouseX > this.x && mouseX < this.x + this.w) {
			if(mouseY > this.y && mouseY < this.y + this.w) {
				return true;
			}//end if
		} else{
			return false;
		}//end if else
	}//end clicked

	reveal = function(marker = false) {
		if(!this.displayed) {
			if(this.mine && !marker) {
				ctx.fillStyle = "#ff5900"
				ctx.beginPath();
				ctx.arc(this.x + this.w/2, this.y + this.w/2, this.w/3 + 1, 0, 2 * Math.PI);
				ctx.fill();
				game_over = true;
				this.displayed = true;
			} else if(!marker) {
				ctx.fillStyle = "#f0f0f0"
				ctx.fillRect(this.x+1,this.y+1,this.w-2,this.w-2);
				if(this.total != 0) {
					ctx.textAlign = "center";
					ctx.font = "30px Arial";
					ctx.fillStyle = "black";
					ctx.fillText(this.total, this.x + this.w/2, this.y + this.w/1.5);
				}//end if
				revealed++;
				this.displayed = true;
			} else if(marker) {
				ctx.textAlign = "center";
				ctx.font = "30px Arial";
				ctx.fillStyle = "red";
				ctx.fillText("|>", this.x + this.w/2, this.y + this.w/1.5);
			}//end else
		}//end if
	}//end reveal
}//end cell