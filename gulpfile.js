var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    entityconvert = require('gulp-entity-convert');
 
 
gulp.task('build', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: false,
                removeLinkTags: false
        }))
        .pipe(entityconvert({ type: 'html' }))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', function() {
  gulp.watch('./*.html', ['build']);
});