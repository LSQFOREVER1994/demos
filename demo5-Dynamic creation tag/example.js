window.onload=function() {
	var testdiv=document.getElementById("testdiv");
	alert(testdiv.innerHTML);
}
function insertParagraph(text){
	var str="<p>";
	str+=text;
	str+="</p>";
	document.write(str);
}