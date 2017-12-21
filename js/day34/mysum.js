define(function(require,exports,module){  //其它模块实现 逻辑功能
	//exports,module  搭配使用  负责 模块的暴露 
	var obj = {
		arrsum : function(arr){
			var s = 0;
			for( var i = 0 ; i < arr.length ; i++ ){
				s += arr[i];
			}
			return s;
		},
		sum : function(){
			var s = 0;
			for( var i = 1 ; i <= 100 ; i++ ){
				s += i;
			}
			return s;
		}
	};
	
	//模块暴露
	module.exports = obj; 
})