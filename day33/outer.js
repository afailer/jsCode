define(function(){
	// 为什么要用return？
	// 为甚要返回一个对象？
	return {
		equal : function(a,b){
			return a > b ? a : b;
		},
		add : function(a,b){
			return a + b;
		},
		sum : function(arr){
			var s = 0;
			for( var i = 0 ; i < arr.length ; i++ ){
				s += arr[i];
			}
			return s;
		}
	}
})
