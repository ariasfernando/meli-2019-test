const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', (done) => { 
  gulp.src('server/src/**/*.js')    
  .pipe( babel(
    {
      "presets": ["@babel/preset-env"] 
    }))
  .pipe(gulp.dest('./server/dist'));
  done();
 });