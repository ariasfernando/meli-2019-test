const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('models', (done) => { 
  gulp.src('client/src/models/**/*.js')    
    .pipe( babel(
      {
        'presets': ['@babel/preset-env'] 
      }))
    .pipe(gulp.dest('./server/dist/models'));
  done();
});

gulp.task('server', (done) => { 
  gulp.src('server/src/**/*.js')    
    .pipe( babel(
      {
        'presets': ['@babel/preset-env'] 
      }))
    .pipe(gulp.dest('./server/dist'));
  done();
});

gulp.task('default', gulp.series('models','server'));
