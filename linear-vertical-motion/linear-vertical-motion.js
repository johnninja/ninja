function Linear(radius,color){
	if (radius===undefined) {radius=40;};
	if (color===undefined) {color="#ff0000"};
	this.x=0;
	this.y=0;
	this.color=color;
	this.radius=radius;
	this.rotation=0;
	this.scaleX=0;
	this.scaleY=0;
	this.lineWidth=1;
}
Linear.prototype.draw=function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scalX,this.scaleY);
	context.fillStyle=this.color;
	context.lineWidth=this.lineWidth;
	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	context.closePath();
	context.fill();
	if (this.lineWidth>0) {
		context.stroke();
	};
	context.restore();
}