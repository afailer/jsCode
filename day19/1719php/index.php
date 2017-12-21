<?php
	header("content-type:text/html;charset=utf-8");
	//php语法
	//echo "hello";
	
	//变量的定义  $ 
	/*$age = 12;
	echo "年龄是".$age."<br>";*/
	
	/*$score = 90;
	if( $score > 100 ){
		echo "分数有问题";
	}else{
		echo $score;
	}*/
	
	/*$sum = 0;
	for( $i = 1 ; $i <= 10 ; $i++ ){
		$sum += $i;
	}*/
	
	 
	//函数  function
	function fn($num,$arr){
		for( $i = 0 ; $i< count($arr) ; $i++ ){
			if( $num == $arr[$i] ){
				return true;//存在
			}
		}
		return false;
	}
	
	//数组 ： 索引数组   关联数组  
	//索引数组
	$arr = array(34,23,34,56,78);
	print_r($arr);//打印数组
	// echo fn(34,$arr);
	
	//关联数组
	$arr2 = array("name"=>"jack","age"=>23,"addr"=>"北京");
	print_r($arr2);
	
	print "hello";
?>