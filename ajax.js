function ajax (url,method,success.failure) {
	var xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject('Microsoft.XMLHTTP');
	xhr.onreadystatechange=prosDate;
	xhr.open(method,url,true);
	xhr.send(null);

	function prosDate(){
		if (xhr.readyState==4) {
			if (xhr.status==200) {
				success();
			}else{
				failure();
			}
		};
	}
}