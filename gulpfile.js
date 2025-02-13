const gulp = require('gulp');

// Use dynamic imports for ESM modules
async function markdownTask() {
    const { default: markdown } = await import('gulp-markdown'); 
    return gulp.src('views/**/*.md')
        .on('data', (file) => console.log('Processing:', file.path)) // Debug output
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
}

async function zipTask() {
    const { default: zip } = await import('gulp-zip'); // Dynamically import
    return gulp.src(['public/**/*', 'views/**/*', '*.js', '*.json', 'node_modules/**/*'])
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
}

// Register Gulp tasks
exports.markdown = markdownTask;
exports.zip = zipTask;
