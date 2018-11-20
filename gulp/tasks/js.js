module.exports = function(){
  $.gulp.task('js:dev', function(){
    return $.gulp.src('./src/js/*.js')
          .pipe($.gulp.dest('./.tmp/js'))
          .pipe($.browserSync.reload({
            stream:true
          }));
  });

  $.gulp.task('js:build', function(){
    return $.gulp.src('./src/js/*.js')
          .pipe($.gulp.dest('./build/js'));
  });
}