//布置一些任务  通过 gulp 实现任务的调用  
//task("任务名称",[依赖的其他任务],function(){    })
// src([])   源文件路径
// dest()  目标文件路径  (可以自动创建目录)
// pipe()  管道方法 表示输送   也就是 : 下一步
// watch(监听的文件,[任务名])  监听  
//gulp 模块的引入
var gulp = require("gulp");
//引入插件
var concat = require("gulp-concat"); //文件合并
var cssmin = require("gulp-cssmin");//压缩css文件
var imgmin = require("gulp-imagemin");//压缩图片
var sass = require("gulp-sass"); //将scss文件转成 css文件
var uglify = require("gulp-uglify");//压缩js文件
var rename = require("gulp-rename"); //重命名

//压缩js文件   js目录下的sport.js文件   并重命名
gulp.task("uglify",function(){
	return gulp.src( "js/sport5.js" )
			   .pipe( uglify() )
			   .pipe( rename( "sport.min.js" ) )
			   .pipe( gulp.dest("js") );
})


//任务 ：压缩图片
gulp.task("imgmin",function(){
	return gulp.src( "image/*" )
			   .pipe( imgmin() )
			   .pipe( gulp.dest("imgmin") )
})

//将css下的所有的css文件合并成一个文件  
gulp.task("concat",function(){
	return gulp.src( "css/*.css" )
			   .pipe( concat("all.css") )
			   .pipe( gulp.dest( "css" ) )
})
//布置一个任务  将scss文件转成css文件
gulp.task("sass",function(){
	return gulp.src("css/1.scss")
			   .pipe( sass() ) //通过调用sass插件  将scss文件转成css
			   .pipe( rename("style.css") ) //重命名
			   .pipe( gulp.dest( "css" ) );
})
//将css下的1.css 重命名成  page.css
gulp.task( "rename",function(){
	return gulp.src( "css/1.css" )
			   .pipe( rename("page.css") )
			   .pipe( gulp.dest( "css" ) )
} )
  
//布置一个任务  ：  实现 将 index.html 复制到  html目录下
gulp.task("copyHTML",function(){
	return gulp.src("index.html")
			   .pipe( gulp.dest("html") );
})

//布置一个任务  将js目录下的所有js文件 和 css目录下的所有css文件 复制到 all目录下
gulp.task( "copyjs",function(){
	return gulp.src(["js.js","css.css"])
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