function Enemy(type){   //敌机
	this.type = type;
	this.init = function(){
		this.body = create("div");
		switch(this.type){
			case "small" : {
				this.speed = 8;
				this.hp = 1;
				this.dieimg = ["plain1_die1.png","plain1_die2.png","plain1_die3.png"],
				this.body.className = "enemy-small";
				new GameEngine().append(this.body);
				this.left( rand( 0,new GameEngine().width() - this.width() ) );
				this.top( 0 );
				break;
			}
			case "middle" : {
				this.speed = 5;
				this.hp = 3;
				this.dieimg = ["plain2_die1.png","plain2_die2.png","plain2_die3.png","plain2_die4.png"],
				this.body.className = "enemy-middle";
				new GameEngine().append(this.body);
				this.left( rand( 0,new GameEngine().width() - this.width() ) );
				this.top( 0 );
				break;
			}
			case "large" : {
				this.speed = 3;
				this.hp = 6;
				this.dieimg = ["plain3_die1.png","plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"],
				this.body.className = "enemy-large";
				new GameEngine().append(this.body);
				this.left( rand( 0,new GameEngine().width() - this.width() ) );
				this.top( -this.height() );
				break;
			}
		}
		return this;
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
	this.hurt = function(){
		// 如果敌机的血值 减到 0   敌机爆炸 销毁   否则什么也不做  敌机可以继续受伤
		--this.hp <= 0 ? this.explode() : "";
	}
	this.move = function(){
		this.moveTimer = setInterval(function(){
			this.top( this.top() + this.speed );
			if( this.top() > new GameEngine().height() ){
				clearInterval( this.moveTimer );
				this.destroy();
			}
		}.bind(this),30)
		return this;
	}
	this.destroy = function(){
		this.body.remove();
	}
	this.explode = function(){
		//如果敌机爆炸了  此时爆炸过程中子弹经过   不应该出现子弹爆炸   
		//将 敌机 从集合中删掉
		new GameEngine().enemes.delete( this );
		//如果某个敌机死亡  停止定时器
		clearInterval( this.moveTimer );
		//先换图  后销毁
		var timer  = setInterval(function(){
			//如果 存放敌机变化图片的数组长度 为 0  敌机销毁
			if( this.dieimg.length == 0 ){
				clearInterval(timer);
				this.destroy();
			}
			this.body.style.background = "url(images/" + this.dieimg.shift()+")";
		}.bind(this),300)
	}
}