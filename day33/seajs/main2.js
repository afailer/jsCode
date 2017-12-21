define(function(require){
	var $ = require("jquery-1.11.1.min");
	var color = require("color");
	//$("body").css("background","red")
	$("li").each(function(){
		$(this).css( "background-color" , color.randColor() );
	}).mouseenter(function(){
		_color = color.setColor($(this));//颜色获取
		color.setColor( $(this),"gray" ); //颜色设置  css
	}).mouseleave(function(){
		color.setColor( $(this),_color );
	})
})