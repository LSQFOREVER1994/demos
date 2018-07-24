window.onload=function() {
	var testdiv=document.getElementById("testdiv");
	testdiv.innerHTML="<p>I inserted <em>this</em> content.</p>";
	alert(testdiv.innerHTML);
}
function insertParagraph(text){
	var str="<p>";
	str+=text;
	str+="</p>";
	document.write(str);
}