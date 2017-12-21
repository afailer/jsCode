	function Bullet(){  //子弹
		this.init = function(){
			this.body = create("div");
			this.body.className = "bullet";
			new GameEngine().append(this.body);	
			this.left( new MyPlane().width()/2 + new MyPlane().left() - this.width()/2 );
			this.top( new GameEngine().height() - new MyPlane().height() - this.height() );
			return this;
		}
		this.move = function(){
			this.moveTimer = setInterval(function(){
				this.top( this.top() - 5 );
				if( this.top() < -this.height() ){
					//删除子弹 并清除定时器
					clearInterval( this.moveTimer );
					this.destroy();
					return;//如果 子弹没有碰到敌机  并 飞出可视区 ， 不再检测碰撞
				}
				//在某个子弹移动时   检测该子弹和敌机的碰撞问题
				//以一个子弹为准   找到所有的敌机    遍历所有敌机
				//如果查出 多个敌机对象 ？？？
				var enemes = new GameEngine().enemes;
				//遍历所有的敌机
				for( var en of enemes ){
					if( pz( this.body , en.body ) ){ //碰上了
						// 子弹销毁
						this.destroy();
						//停止子弹移动的定时器
						clearInterval( this.moveTimer ); 
						// 敌机受伤
						en.hurt();
					}
				}
			}.bind(this),30)
		}
		this.destroy = function(){
			this.body.className = "bullet_die";
			
			setTimeout(function(){
				//this.body.remove();
				this.body.style.background = "url(images/die2.png)";
				setTimeout(function(){
					this.body.remove();
				}.bind(this),300)
			}.bind(this),300)
			
		}
		this.left = function(val){
			this.body.style.left = val + "px";
		}
		this.width = function(){
			return this.body.offsetWidth;
		}
		this.height = function(){
			return this.body.offsetHeight;
		}
		this.top = function(val){
			if( val ){
				this.body.style.top = val + "px";
			}
			return this.body.offsetTop;
		}
	}