module.exports = function(){
  $.gulp.task('clean', $.del.bind(null, ['./.tmp'], {dot: true}));

  $.gulp.task('clean:content', 
    $.del.bind(null, ['./build/sass'], {dot: true}));
}