define(function(require){
	//引入外部模块  并重命名
	var $ = require("jquery-1.11.1.min");
	var out = require("outer");
	//操作页面元素 并调用功能
	$("body").css("background","blanchedalmond");
	
	$("#btn").click(function(){
		alert( out.equal( $("#t1").val() , $("#t2").val() ) );
	})
})