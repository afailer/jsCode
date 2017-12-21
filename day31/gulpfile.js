//布置一些任务  通过 gulp 实现任务的调用  
//task("任务名称",[依赖的其他任务],function(){    })
// src([])   源文件路径
// dest()  目标文件路径  (可以自动创建目录)
// pipe()  管道方法 表示输送   也就是 : 下一步
// watch(监听的文件,[任务名])  监听  
//gulp 模块的引入
var gulp = require("gulp");

//布置一个任务  ：  实现 将 index.html 复制到  html目录下
gulp.task("copyHTML",function(){
	return gulp.src("index.html")
			   .pipe( gulp.dest("html") );
})
//布置一个任务  将js目录下的所有js文件 和 css目录下的所有css文件 复制到 all目录下
gulp.task( "copyjs",function(){
	return gulp.src(["js/*.js","css/*.css"])
			   .pipe( gulp.dest( "all" ) );
})

//布置一个任务  监听index.html的文件内容的改变 
// 如果index.html内容改变了  就自动更改 html目录下的index.html
gulp.task( "watch" , function(){
	return gulp.watch( "index.html",["copyHTML"] );
} )

//布置一个默认的任务
gulp.task("default",["say","eat"],function(){
	console.log( "默认任务执行....." );
})
//布置一个任务  say
gulp.task("say",function(){
	console.log("say任务执行");
})
gulp.task("eat",function(){
	console.log("eat任务执行");
})