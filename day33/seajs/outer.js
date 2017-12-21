define(function(require,exports,module){
	//exports,module  作用 ： 负责模块的暴露
	//具体功能实现
	var obj = {
		equal : function(a,b){
			return a > b ? a : b;
		}
	};
	
	module.exports = obj;//模块暴露  
})