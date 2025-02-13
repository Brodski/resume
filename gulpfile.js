const gulp = require('gulp');
const markdown = require('gulp-markdown');
const zip = require('gulp-zip');

gulp.task('markdown', function () {
    return gulp.src('views/markdown/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.task('zip', function () {
    return gulp.src(['public/**/*', 'views/**/*', '*.js', '*.json' ])
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});