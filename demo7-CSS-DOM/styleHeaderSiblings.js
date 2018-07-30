function addClass(element,value) {
	if(!element.className) {
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+="";
		newClassName+=value;
		element.className=newClassName;
	}
}
function styleHeaderSiblings(tag,theclass) {
	if(!document.getElementsByTagName)return false;
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0;i<elems.length;i++){
		elem=getNextElement(elems[i].nextSibling);
		addClass(elem,theclass);
	}
}
addLoadEvent(function(){
	styleHeaderSiblings("h1","intro");
});
function getNextElement(node) {
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
addLoadEvent(styleHeaderSiblings);