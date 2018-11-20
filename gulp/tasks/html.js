module.exports = function(){
  $.gulp.task('html:dev', function(){
    return $.gulp.src('./src/*.html')
          .pipe($.gulp.dest('./.tmp/'))
          .pipe($.browserSync.reload({
            stream:true
          }));
  });

  $.gulp.task('html:build', function(){
    return $.gulp.src('./src/*.html')
          .pipe($.gulp.dest('./build/'));
  });
}