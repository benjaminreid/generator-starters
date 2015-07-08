var gulp = require('gulp');
<% if (sass) { %>var sass = require('gulp-sass');<% } %>

gulp.task('default', function() {
  console.log('Yo! This is just a plan ol\' default task');
});
