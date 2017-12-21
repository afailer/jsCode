define(function(){
	return {
		checkName : function(str){
			var reg = /^\w{3,6}$/;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(str){
			var reg = /^.{6,}$/;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		checkQPwd : function(str1,str2){
			if( str1 == str2 ){
				return true;
			}else{
				return false;
			}
		}
	}
})
