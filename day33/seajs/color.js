/*define(function(require,exports,module){
	var obj = {
		rand : function(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		},
		randColor : function(){
			var color = "#"; 
			var str = "0123456789abcdef";
			for( var i = 1 ; i <= 6 ; i++ ){
				color += str.charAt( this.rand(0,15) );
			}
			return color;
		},
		setColor : function(obj,color){
			if( color ){
				obj.css("background-color",color);
			}
			return obj.css("background-color");
		}
	};
	
	module.exports = obj;
})*/

define(function(require,exports,module){
	class Color{
		rand(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		
		randColor(){
			var color = "#"; 
			var str = "0123456789abcdef";
			for( var i = 1 ; i <= 6 ; i++ ){
				color += str.charAt( this.rand(0,15) );
			}
			return color;
		}
		
		setColor(obj,color){
			if( color ){
				obj.css("background-color",color);
			}
			return obj.css("background-color");
		}
	}
	
	module.exports = new Color();
})