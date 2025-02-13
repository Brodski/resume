const gulp = require('gulp');

// Use dynamic imports for ESM modules
async function markdownTask() {
    const { default: markdown } = await import('gulp-markdown'); 
    return gulp.src('views/**/*.md')
        .on('data', (file) => console.log('Processing:', file.path)) // Debug output
        .pipe(markdown())
        .pipe(gulp.dest('views'));
}

async function zipTask() {
    const { default: zip } = await import('gulp-zip'); // Dynamically import
    return gulp.src(['public/**/*', 'views/**/*', '*.js', '*.json', 'node_modules/**'], {base: '.'})
        .pipe(zip('BUILD_FOR_LAMBDA.zip'))
        .pipe(gulp.dest('dist'));
}

// Watch task: auto-run on file changes
function watchTask() {
    gulp.watch('views/**/*.md', markdownTask);  // Watch Markdown files
    gulp.watch(['public/**/*', 'views/**/*', '*.js', '*.json'], zipTask); // Watch for zipping
}

// Default task (runs watch)
exports.default = watchTask;
exports.watch = watchTask;
exports.markdown = markdownTask;
exports.zip = zipTask;