		function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}
	function startMove(obj,attr,iTarget){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var curr = 0;
			if(attr=='opacity'){
				curr=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				curr=parseInt(getStyle(obj,attr));
			}
			var speed = (iTarget-curr)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(curr==iTarget){
				clearInterval(obj.timer);
			}
			else{
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(curr+speed)+')';
					obj.style.opacity=(curr+speed)/100;
				}
				else{
					obj.style[attr]=curr+speed+'px';
				}
			}
		},40);
	}