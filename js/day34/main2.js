define(function(require){
	var $ = require("jquery-1.11.1.min");
	var rColor = require("randColor");
	//为不同的添加不同背景颜色   功能 随机数   随机颜色  颜色设置
	$("li").each(function(){
		//$(this).css("background",rColor.randomColor());
		rColor.setColor( $(this)  ,rColor.randomColor() );
	}).mouseenter(function(){
		//获取颜色
		color = rColor.setColor( $(this) );
		//改变当前行的颜色
		$(this).css("background-color","orange");
	}).mouseleave(function(){
		$(this).css("background-color",color);
	})
})