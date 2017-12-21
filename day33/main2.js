requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		vd : "validate"
	}
})
 
requirejs(["jquery","vd"],function($,vd){
	$("form").submit(function(){
		//验证用户名  flagName 
		//验证密码     flagPwd  
		//确认密码    flagQpwd
		if( flagName && flagPwd && flagQPwd){
			return true;
		}else{
			return false;
		}
	})
	
	//用户名失去焦点 验证
	var flagName = null;
	$("#t1").blur(function(){
		if( vd.checkName( $(this).val() ) ){
			$("#s1").html("正确");
			flagName = true;
		}else{
			$("#s1").html("错误");
			flagName = false;
		}
	})
	
	//密码失去焦点 验证
	var flagPwd = null;
	$("#t2").blur(function(){
		if( vd.checkPwd( $(this).val() ) ){
			$("#s2").html("正确");
			flagPwd = true;
		}else{
			$("#s2").html("错误");
			flagPwd = false;
		}
	})
	
	//确认密码 和原密码一直
	var flagQPwd = null;
	$("#t3").blur(function(){
		if( vd.checkQPwd( $("#t2").val() , $(this).val() ) ){
			$("#s3").html("正确");
			flagQPwd = true;
		}else{
			$("#s3").html("错误");
			flagQPwd = false;
		}
	})
})
