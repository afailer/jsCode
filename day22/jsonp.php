<?php
	//接收客户端请求的数据
	$data = $_GET["callback"];//接收的值实际上是一个函数   $data 代表一个函数名
	
	//模拟数据
	$arr = array("name"=>"lce","sex"=>"girl");
	$res = json_encode($arr);//将关联数据转成json对象  
	
	
	//服务器向客户端返回数据
	echo $data."(".$res.")"; // 调用 回调函数 将数据传递给客户端  $data($res)
?>