	function MyPlane(){ //战斗机
		if( !MyPlane.instance ){
			MyPlane.instance = {
				show : function(){
				 	this.init();//飞机创建  
				 	this.addListener({ type : "mouse" }); //飞机移动（鼠标或键盘控制）
				 	this.fire(); //飞机开火  子弹出场
				},
				fire : function(){
					setInterval(function(){
						new Bullet().init().move();
					}.bind(this),new GameEngine().level * 200);
				},
				init : function(){ //飞机创建
					this.body = create("div");
					this.body.className = "my-warplain";
					//将飞机添加到   游戏引擎中 body
					//new GameEngine().body.appendChild(this.body);
					new GameEngine().append(this.body);
					this.body.style.bottom = 0;
					//this.body.style.left = (new GameEngine().width()-this.width())/2 + "px";
					this.left( (new GameEngine().width()-this.width())/2 );
				},
				width : function(){
					return this.body.offsetWidth;
				},
				height : function(){
					return this.body.offsetHeight;
				},
				left : function(val){
					//如果val有值  就设置left值   如果val值是undefined 就获取值
					if( val ){
						this.body.style.left = val + "px";
					}
					return this.body.offsetLeft;//获取left值
				},
				addListener :function(obj){
					switch(obj.type){
						case "mouse" : {
							new GameEngine().body.addEventListener("mousemove",function(e){
								var e = e||event;
								var _left = e.pageX - new GameEngine().left()-this.width()/2;
								var maxL = new GameEngine().width()-this.width();
//								_left = _left<0?0:(_left>maxL ? maxL : _left);
//								Math.max(0,_left)  最小值   Math.min() 最大值
								_left = Math.min( Math.max(0,_left) , maxL ); 
								this.left( _left );
							}.bind(this))
							break;
						}
						case "key" : {
							document.addEventListener("keydown",function(e){
								var e = e||event;
								var code = e.keyCode;
								switch(code){
									case 37 : {
										var _left = this.left() - 5;
										_left = Math.max(0,_left);
										this.left( _left );
										break;
									}
									case 39 : {
										var _left = this.left() + 5;
										_left = Math.min( new GameEngine().width()-this.width() , _left);
										this.left( _left );
										break;
									}
								}
							}.bind(this))
							break;
						}
					}
				}
			}
		}
		return MyPlane.instance;
	}