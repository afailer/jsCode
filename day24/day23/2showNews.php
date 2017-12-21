<?php
	//$news = array("name"=>"jack","age"=>19);//关联数组  
	$news = array( 
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "习近平谈新时代选人用人的标尺","time"=>"2017-10-31"),
		array( "title" => "人民团体认真学习十九大精神综述","time"=>"2017-10-31"),
		array( "title" => "人民团体认真学习十九大精神综述","time"=>"2017-10-31"),
		array( "title" => "人民团体认真学习十九大精神综述","time"=>"2017-10-31")
	);
	echo json_encode($news);//json_encode() 将关联数组转成json对象  [{},{},{}]
?>
