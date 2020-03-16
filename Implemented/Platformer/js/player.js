class Player {
	Player = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		this.w = 50;
		this.h = 50;
		this.ax = 0;//acceleration x
		this.ay = 0;//acceleration y
		this.vx = 0;//velocity x
		this.vy = 0;//velocity y
		this.jumped = false;
	}//end player constructor

	update = function(){
		this.vx += this.ax;
		this.vy += this.ay;
		this.x += this.vx * 5;
		this.y += this.vy * 5;

		//gravity
		

		//constraints
		//walls
		if(this.y > height - this.h) {
			this.y = height - this.h;
			this.ay = this.vy = 0;
			this.jumped = false;
		}//end if
		if(this.y < 0) {
			this.vy = this.ay = 0;
		}//end if
		if(this.x > width - this.w) {
			this.x = width - this.w;
			this.ax = this.vx = 0;
		}//end if
		if(this.x < 0) {
			this.x = 0;
			this.ax = this.vx = 0;
		}//end if

		//acceleration
		if(this.ax > 3) {
			this.ax = 3;
		}//end if
		if(this.ax < -3) {
			this.ax = -3;
		}//end if
		if(this.ay > 3) {
			this.ay = 3;
		}//end if
		if(this.ay < -3) {
			this.ay = -3;
		}//end if

		//speed
		if(this.vx > 5) {
			this.vx = 5;
		}//end if
		if(this.vx < -5) {
			this.vx = -5;
		}//end if
		if(this.vy > 5) {
			this.vy = 3;
		}//end if
		if(this.vy < -7) {
			this.vy = -7;
		}//end if
	}//end update

	show = function() {
		ctx.drawImage(skin,this.x,this.y,this.w,this.h);
	}//end show

	force = function(forceX, forceY) {
		this.ax += forceX;
		this.ay += forceY;
	}//end force

	jump = function() {
		this.vy -= 10;
		this.jumped = true;
	}//end jump

	stop = function() {
		this.vx = 0;
		this.ax = 0;
	}//end stop

	hits = function (portal) {
    		var half = {x: this.w/2, y: this.h/2};
    		var center = {
        		x: portal.x - (this.x+half.x),
        		y: portal.y - (this.y+half.y)
		};
    
		var side = {
			x: Math.abs (center.x) - half.x,
			y: Math.abs (center.y) - half.y
		};
		if (side.x >  this.w/2 || side.y >  this.h/2) {
			return false; 
		}//end if
		if (side.x < 0 || side.y < 0) {
			return true;
		}//end if
	}//end hits
}//end player class