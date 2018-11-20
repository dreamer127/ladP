module.exports = function(){
  $.gulp.task('serv', function() {
    $.browserSync.init({
      notify: false,
      logPrefix: 'WSK',
      logFileChanges: false,
      server: ['./.tmp'],
    });
  });
}