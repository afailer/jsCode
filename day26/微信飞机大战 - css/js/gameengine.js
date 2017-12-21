	function GameEngine(){ //游戏引擎
		if( !GameEngine.instance ){
			GameEngine.instance = {
				ul : document.querySelector("#options"),
				body : document.querySelector("#main"),
				level : 0,//记录等级    
				enemes : new Set(), //定义一个集合  存放所有new出来的敌机对象
				start : function(){
					this.initMenu();//调用初始化菜单功能  实现点击后 记录等级
				},
				initMenu : function(){
					//事件委托
					this.ul.onclick = function(e){
						var e = e || event;
						var target = e.target || e.srcElement;
						if( target.nodeName.toLowerCase() == "li" ){
							this.level = target.getAttribute("level");//获取标签的自定义属性值
							
							//删除ul  logo，动画飞机出场
							this.ul.remove();
							this.loading();
						}
					}.bind(this)
				},
				loading : function(){
					//logo，动画飞机出场
					var logo = create("div");
					logo.className = "logo";
					this.body.appendChild(logo);
					
					var loadPlane = create("div");
					loadPlane.className = "loading";
					this.body.appendChild(loadPlane);
					//动画飞机定时器
					var timer = null;
					var index = 1;
					timer = setInterval(function(){
						loadPlane.style.background = "url(images/loading"+( ++index )+".png)";
						if( index == 3 ){
							index = 0;
						}
					},600)
					
					this.bgMove();
					
					//3秒后  logo  和 loadPlane  消失   我的飞机出场
					setTimeout(function(){
						logo.remove();
						loadPlane.remove();
						clearInterval(timer);
						//飞机出场
						new MyPlane().show();
						
						this.autoCreateEnemy();//创建不同类型的敌机
					}.bind(this),3000)
				},
				autoCreateEnemy : function(){
					var that = this;
					if( Math.random() > 0.2 ){
						setInterval(function(){ //小敌机
							//创建敌机的同时   将敌机对象再存入到集合enemes中  
							// 链式调用  注意 再敌机的move方法中  返回当前对象this  new出来的敌机  
							that.enemes.add( new Enemy("small").init().move() );
							//console.log( that.enemes );
						},1000)
					}
					if( Math.random() > 0.4 ){
						setInterval(function(){ //中型敌机
							//new Enemy("middle").init().move();
							that.enemes.add( new Enemy("middle").init().move() );
						},2000)
					}
					if( Math.random() > 0.4 ){
						setInterval(function(){  //大型敌机
							//new Enemy("large").init().move();
							that.enemes.add( new Enemy("large").init().move() );
						},3000)
					}
				},
				bgMove : function(){
					var count = 0;
					//背景移动
					setInterval(function(){
						//背景移动  通过控制背景位置实现
						this.body.style.backgroundPositionY = ++count + "px";
					}.bind(this),30)
				},
				append : function(obj){
					this.body.appendChild(obj);
				},
				width : function(){
					return this.body.offsetWidth;
				},
				height : function(){
					return this.body.offsetHeight;
				},
				left : function(){
					return this.body.offsetLeft;
				}
			}
		}
		return GameEngine.instance;
	}