		function getStyle(obj,name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj,false)[name];
		}
	}
	function startMove(obj,json,fnEnd)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var bstop=true;//假设所有的值都到了
			for(var attr in json)
			{
			var cur=0;
			if(attr=='opacity')
			{
				var cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				var cur=parseInt(getStyle(obj,attr));
			}			
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])
			{
				bstop=false;
			}
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
				}
				else
				{
					obj.style[attr]=cur+speed+"px";
				}
			}
			if(bstop)
			{
				clearInterval(obj.timer);
				if(fnEnd) fnEnd();
			}
		},30);
	}