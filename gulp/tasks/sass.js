module.exports = function(){
  $.sass.compiler = require('node-sass');
  
  $.gulp.task('sass:dev', function () {
    return $.gulp.src('./src/sass/main.scss')
      .pipe($.sourcemaps.init())
      .pipe($.sass.sync().on('error', $.sass.logError))
      .on("error", $.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Sass Error"
      }))
      .pipe($.sourcemaps.write())
      .pipe($.gulp.dest('./.tmp/css'))
      .pipe($.browserSync.reload({
        stream:true
      }));  
  });

  $.gulp.task('sass:build', function () {
    return $.gulp.src('./src/sass/main.scss')
      .pipe($.sass.sync().on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      }))
      .on("error", $.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Sass Error"
      }))
      // .pipe($.csso())
      .pipe($.gulp.dest('./build/css')); 
  });
}