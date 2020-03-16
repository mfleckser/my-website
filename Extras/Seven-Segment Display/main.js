var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var width = canv.width;
var height = canv.height;

var segs = [];
var a = new Segment();
var b = new Segment();
var c = new Segment();
var d = new Segment();
var e = new Segment();
var f = new Segment();
var g = new Segment();
a.Segment('a');
b.Segment('b');
c.Segment('c');
d.Segment('d');
e.Segment('e');
f.Segment('f');
g.Segment('g');
segs.push(a);
segs.push(b);
segs.push(c);
segs.push(d);
segs.push(e);
segs.push(f);
segs.push(g);

var digit = 0;

function number(num) {
	switch(num) {
		case 0:
			a.light("on");
			b.light("on");
			c.light("on");
			d.light("on");
			e.light("on");
			f.light("on");
			g.light("off");
			break;
		case 1:
			a.light("off");
			b.light("on");
			c.light("on");
			d.light("off");
			e.light("off");
			f.light("off");
			g.light("off");
			break;
		case 2:
			a.light("on");
			b.light("on");
			c.light("off");
			d.light("on");
			e.light("on");
			f.light("off");
			g.light("on");
			break;
		case 3:
			a.light("on");
			b.light("on");
			c.light("on");
			d.light("on");
			e.light("off");
			f.light("off");
			g.light("on");
			break;
		case 4:
			a.light("off");
			b.light("on");
			c.light("on");
			d.light("off");
			e.light("off");
			f.light("on");
			g.light("on");
			break;
		case 5:
			a.light("on");
			b.light("off");
			c.light("on");
			d.light("on");
			e.light("off");
			f.light("on");
			g.light("on");
			break;
		case 6:
			a.light("on");
			b.light("off");
			c.light("on");
			d.light("on");
			e.light("on");
			f.light("on");
			g.light("on");
			break;
		case 7:
			a.light("on");
			b.light("on");
			c.light("on");
			d.light("off");
			e.light("off");
			f.light("off");
			g.light("off");
			break;
		case 8:
			a.light("on");
			b.light("on");
			c.light("on");
			d.light("on");
			e.light("on");
			f.light("on");
			g.light("on");
			break;
		case 9:
			a.light("on");
			b.light("on");
			c.light("on");
			d.light("on");
			e.light("off");
			f.light("on");
			g.light("on");
			break;
	}//end switch
}//end number

function draw() {
	//ctx.fillStye = "white";
	//ctx.fillRect(0,0,width,height);
	for(var i = 0; i < segs.length; i++) {
		segs[i].show();
	}//end for
	number(digit);
}//end draw
var t = setInterval(draw, 1000/15);
setInterval(function(){
	digit++;
	if(digit > 9) {
		digit = 0;
	}//end if
},1000);