window.onload=function(){
	if(!document.getElementsByTagName) return false;
var lnks=document.getElementsByTagName("a");
for(var i=0;i<lnks.length;i++){
	if(links[i].getAttribute("class")=="popup"){
		links[i].onclick=function(){
			popUp(this.getAttribute("href"));
			return false;
		}
	}
}
}
function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}
function showPic(a){var b=a.getAttribute("href");
document.getElementById("placeholder").setAttribute("src",b);
a.getAttribute("title");
document.getElement.getElementById("description");
}
