class Segment {
	Segment = function(id) {
		this.id = id;
		this.w = 20;
		this.h = 80;
		this.lit = false;
		this.x = 0;
		this.y = 0;

		if(this.id == 'a' || this.id == 'd' || this.id == 'g') {
			this.w = 80;
			this.h = 20;
		}//end if

		switch(this.id) {
			case 'a':
				this.x = this.h;
				this.y = 0;
				break;
			case 'b':
				this.x = width - this.w;
				this.y = this.w;
				break;
			case 'c':
				this.x = width - this.w;
				this.y = height - (this.w + this.h);
				break;
			case 'd':
				this.x = this.h;
				this.y = height - this.h;
				break;
			case 'e':
				this.x = 0;
				this.y = height - (this.w + this.h);
				break;
			case 'f':
				this.x = 0;
				this.y = this.w;
				break;
			case 'g':
				this.x = this.h;
				this.y = this.w + this.h;
				break;
		}//end switch
	}//end segment constructor

	show = function() {
		if(this.lit) {
			ctx.fillStyle = "rgba(255,0,0,1)";
		} else {
			ctx.fillStyle = "black";
		}//end if else
		ctx.fillRect(this.x,this.y,this.w,this.h);
	}//end show

	light = function(toggle) {
		if(toggle == "on") {
			this.lit = true;
		} else {
			this.lit = false;
		}//end if else
	}//end light
}//end segment class