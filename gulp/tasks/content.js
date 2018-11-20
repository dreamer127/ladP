module.exports = function(){
  $.gulp.task('cont:dev', function(){
    return $.gulp.src('./src/**')
          .pipe($.gulp.dest('./.tmp/'));
  });

  $.gulp.task('cont:build', function(){
    return $.gulp.src('src/**')
          .pipe($.gulp.dest('./build/'));
  });
}