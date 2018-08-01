function addLoadEvent(func) {
	var olaonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function() {
			olaonload();
			func();
		}
	}
}