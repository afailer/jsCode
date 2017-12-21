<?php
	header("content-type:text/html;charset=utf-8");
	//服务器接收客户端提交的数据  $_POST["name"]   $_GET["name"]
	$name = $_GET["uname"];
	$pwd = $_GET["upwd"];
	//此处省略一堆操作数据库 的代码
	if( $name == "admin" && $pwd == "123456" ){
		echo "<script>alert('登录成功');location.href='http://www.baidu.com'</script>";
	}else{
		echo "登录失败";
	}
	//echo $name.",".$pwd;  //向客户端返回结果
?>