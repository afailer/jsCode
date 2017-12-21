//配置文件信息  并为某个文件重命名
//引入外部的文件 
requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		out : "outer"
	}
})

//操作页面元素
requirejs(["jquery","out"],function($,out){ //参数代表了某个模块
	$("body").css("background","skyblue");
	//...... 比较两个数的大小
	//调用具体功能
	//点击按钮获取结果
	$("#btn").click(function(){
		alert( out.add( Number($("#a").val()) ,Number($("#b").val()) ) );
	})
})
