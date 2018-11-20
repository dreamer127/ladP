'use strict';

global.$ = {
  gulp: require('gulp4'),
  sourcemaps: require('gulp-sourcemaps'),
  autoprefixer: require('gulp-autoprefixer'),
  del: require('del'),
  notify: require("gulp-notify"),
  browserSync: require('browser-sync').create(),
  sass: require('gulp-sass'),

  path: {
    task: require('./gulp/config/tasks.js')
  }
};

$.path.task.forEach(taskPath => {require(taskPath)()});

$.gulp.task('dev', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('html:dev', 'sass:dev', 'js:dev', 'cont:dev'),
  $.gulp.parallel('watch', 'serv')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('html:build', 'sass:build', 'js:build', 'cont:build'),
  $.gulp.parallel('clean:content')
));


