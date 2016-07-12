var gulp = require("gulp");
var server = require("gulp-express");//support gulp running express's server

gulp.task('server', function(){

	server.run(['express-server.js']);
	gulp.watch(['express-server.js'], [server.run]);//reload server
	gulp.watch(['app.js'], server.notify); //reload page
	gulp.watch(['index.html'], server.notify); //reload page
});