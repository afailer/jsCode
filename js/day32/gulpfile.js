var gulp = require("gulp");//gulp 模块导入
var sass = require("gulp-sass"); //插件模块引入
var rename = require("gulp-rename");
var cssMin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
//将sass目录下的sass文件转成css文件
gulp.task("gulpSass",function(){
	return gulp.src( "sass/style.scss" )
			   .pipe( sass() )
			   .pipe( rename("277.css") )
			   .pipe( gulp.dest( "css" ) )
})

//压缩css
gulp.task("cssmin",function(){
	return gulp.src( "css/style.css" )
			   .pipe( cssMin() )
			   .pipe( rename("style.min.css") )
			   .pipe( gulp.dest( "css" ) );
})
//压缩js文件
gulp.task("uglify",function(){
	return gulp.src( "script/sport.js" )
			   .pipe( uglify() )
			   .pipe( rename("sport.min.js") )
			   .pipe( gulp.dest( "script" ) );
})


//合并文件  将script下所有js文件合并成一个文件   然后压缩   然后重命名
gulp.task("concat",function(){
	return gulp.src("script/*.js")
			   .pipe( concat("all.js") )
			   .pipe( uglify() )
			   .pipe( rename("all.min.js") )
			   .pipe( gulp.dest( "script" ) )
})


gulp.task("default",["copyhtml"]);

//布置一个任务  将 css下面所有的文件复制到 dest目录下
gulp.task("copycss",function(){
	//   * 表示目录下所有的内容  但不包括子目录文件
	//   **  表示子目录下所有文件
	return gulp.src( "css/*/**" ).pipe( gulp.dest("dest/css") );
})

//将 script下所有js文件 和 lib 下所有js文件  复制到  dest下的  js目录下

gulp.task("copyall",function(){
	return gulp.src(["script/*.js","lib/*.js"]).pipe( gulp.dest("dest/js") );
})

gulp.task("copyallfile",function(){
	return gulp.src("src/*/**").pipe( gulp.dest("dest/html") );
})


//布置一个任务  完成 将src目录下的  index.html复制到dest文件夹中
gulp.task("copyhtml",function(){
	return gulp.src("src/index.html").pipe( gulp.dest("dest") );
})
//监听
gulp.task("watch",function(){
	//任务执行  如果src中的index.html内容有变动，会自动完成 复制 
	return gulp.watch("src/index.html",["copyhtml"]);
})
