class Portal {
	Portal = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		this.positions = [[width - 50, height - 50],[width - 50, height - 150], [width-50,height-50],[width-50,height-425],[width-50,height-350],[width-50,height-50]];
	}//end portal constructor

	show = function() {
		if(level > this.positions.length - 1) {
			level = 0;
		}//end if
		this.x = this.positions[level][0];
		this.y = this.positions[level][1];
		var grad = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,75);
		grad.addColorStop(0, "rgba(0,255,0,1)");
		grad.addColorStop(1, "rgba(0,255,0,0)");
		ctx.fillStyle = grad;
		ctx.beginPath();
		ctx.arc(this.x, this.y, 75, 0, 2 * Math.PI);
		ctx.fill();
		//"rgba(73, 255, 64,0.7)"
	}//end show
}//end class portal