//obj1 运动的物体
//obj2 被碰撞的物体
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft + obj1.offsetWidth;
	var R1 = obj1.offsetLeft;
	var T1 = obj1.offsetTop + obj1.offsetHeight;
	var B1 = obj1.offsetTop;
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	if( L1 < L2 || R1 > R2 || T1 < T2 || B1 > B2){ //碰不上
		return false;
	}else{
		return true;
	}
}
//获取任意区间的整数值
function rand(min,max){
	return Math.floor(Math.random()*(max-min+1) + min);
}
//创建页面元素
function create(ele){
	return document.createElement(ele);
}