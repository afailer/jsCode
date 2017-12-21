define(function(require){ //参数的作用 导入其它的模块 并重命名
	var $ = require("jquery-1.11.1.min");
	var getsum = require("mysum");
	$("body").css("background","darkseagreen");
	
	alert( getsum.arrsum( [1,2,3,4,5,6] ) );
	alert( getsum.sum() );
})