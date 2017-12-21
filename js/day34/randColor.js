define(function(require,exports,module){
	/*var obj = {
		rand : function(min,max){
			return Math.floor(Math.random()*(max-min+1) + min)
		},
		randomColor : function(){
			var str = "0123456789abcdef";
			var color = "#";
			for( var i = 0 ; i < 6 ; i++ ){
				color += str.charAt( this.rand(0,15) );
			}
			return color;
		},
		setColor : function(obj,color){
			if( color ){//如果颜色存在 就设置  否则就  获取颜色  
				obj.css("background-color",color);
			}
			return obj.css("background-color");
		}
	};
	
	module.exports = obj;*/
	class ChangeColor{
		rand(min,max){
			return Math.floor(Math.random()*(max-min+1) + min);
		}
		randomColor(){
			var str = "0123456789abcdef";
			var color = "#";
			for( var i = 0 ; i < 6 ; i++ ){
				color += str.charAt( this.rand(0,15) );
			}
			return color;
		}
		setColor(obj,color){
			if( color ){//如果颜色存在 就设置  否则就  获取颜色  
				obj.css("background-color",color);
			}
			return obj.css("background-color");
		}
	}
	
	module.exports = new ChangeColor();
})