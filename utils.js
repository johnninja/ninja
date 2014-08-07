var utils={};
utils.captureMouse=function(canvas) {
	// body...
	var obj={};
	canvas.addEventListener('mousemove',function(ev){
		ev=ev||window.event;
		obj.x=ev.clientX;
		obj.y=ev.clientY;
	});
	return obj;
}