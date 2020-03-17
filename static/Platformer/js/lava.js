class Lava {
	Lava = function() {
		this.costumes = [
[[]], [[]], [[width/2-150, height-10, 300, 10]],[[width/2-100,height-10,200,10]],[[width/2-65,height-85,130,10],[width/2,height-10,width/2,10]],[[125,0,15,height-201],[125,height-75,15,75],[300,95,15,height-95],[width-200,height-150,200,15]]];
		this.shapes = this.costumes[0];
	}//end lava constructor

	show = function() {
		if(level > this.costumes.length - 1) {
			level = 0;
		}//end if
		this.shapes = this.costumes[level];
		for(var i = 0; i < this.shapes.length; i++) {
			ctx.fillStyle = "rgba(255,0,0,0.8";
			ctx.fillRect(this.shapes[i][0],this.shapes[i][1],this.shapes[i][2],this.shapes[i][3]);
		}//end for
	}//end show
}//end class lava