var gulp = require('gulp'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
dirs = ['./assets/scss/v65-base/*.scss',
'./assets/scss/theme-vin65Basic/*.scss',
'./assets/scss/theme-vin65Code/*.scss'],
dirsWatch = ['./assets/scss/v65-base/**/*.scss','./assets/scss/theme-vin65Basic/**/*.scss','./assets/scss/theme-vin65Code/**/*.scss'];

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}
 
gulp.task('sass', function () {

  gulp.src(dirs)
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', swallowError)
    .pipe(gulp.dest('./assets/css/'));

});
 
gulp.task('sass:watch', function () {
  gulp.watch(dirsWatch, ['sass']);
});
