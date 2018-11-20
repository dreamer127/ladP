module.exports = function(){
  $.gulp.task('watch', function(){
    $.gulp.watch('./src/*.html', $.gulp.series('html:dev'));
    $.gulp.watch('./src/js/*.js', $.gulp.series('js:dev'));
    $.gulp.watch('./src/**', $.gulp.series('cont:dev'));
    $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('sass:dev'));
  });
}