<?php
	header("content-type:text/html;charset=utf-8");
	$info = $_GET["uname"]; //<a></a>
	$newInfo = strip_tags($info);//去掉标签
	echo $newInfo;
?>