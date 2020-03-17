class Map {
	Map = function() {
		this.costumes = [
[[]], [[width-200, height-75,200,15]], [[width/2-75, height-75, 150, 15]], [[width-150,height-125,150,15],[width/2-150,height-250,150,15],[width-150,height-375,150,15]],[[width/2-100, height-80,200,20],[width-150,height-225,150,15]],[[140,height-70,160,15],[140,height-216,160,15],[140,height-350,160,15],[140,height-500,320,15]]];
		this.shapes = this.costumes[0];
	}//end map constructor

	show = function() {
		if(level > this.costumes.length - 1) {
			ctx.drawImage(cake, 0, 0, width, height);
			player.vx = 0;
			player.ax = 0;
		}//end if
		this.shapes = this.costumes[level];
		for(var i = 0; i < this.shapes.length; i++) {
			ctx.fillStyle = "black";
			ctx.fillRect(this.shapes[i][0],this.shapes[i][1],this.shapes[i][2],this.shapes[i][3]);
		}//end for
	}//end show
}//end class map