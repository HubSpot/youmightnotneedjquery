const gulp = require('gulp');
const stylus = require('gulp-stylus');
const jade = require('gulp-jade');

const readTree = require('./src/readTree');

const CAPS_WORDS = ['JSON', 'HTML', 'AJAX'];
function titleCase(str) {
  return str
    .replace(
      /(^|\b)([a-z])([a-z]+)/g,
      (match, space, first, rest) => `${space}${first.toUpperCase()}${rest}`
    )
    .replace(
      new RegExp(`(?:^|\b)(${CAPS_WORDS.join('|')})(?:$|\b)`, 'ig'),
      (match, word) => word.toUpperCase()
    );
}

function getNamePart(str) {
  return str.split('.')[0];
}

const LANGS = {
  js: 'javascript',
  css: 'css',
};
function fullLanguage(ext) {
  return LANGS[ext];
}

gulp.task('js', () => gulp.src('./src/js/*').pipe(gulp.dest('./dist')));

gulp.task('stylus', () =>
  gulp
    .src('./src/styl/index.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('./dist'))
);

gulp.task('jade', () =>
  readTree((err, comparisons) => {
    if (err) {
      console.error('Error loading comparisons tree', err);
      return;
    }

    const comps = Object.entries(comparisons)
      .map(([title, comparison]) => ({title, comparison}))
      .sort((a, b) => a.title.localeCompare(b.title));

    return gulp
      .src('./src/jade/**/index.jade')
      .pipe(
        jade({
          pretty: true,
          data: {comparisons: comps, titleCase, getNamePart, fullLanguage},
        })
      )
      .pipe(gulp.dest('./dist'));
  })
);

gulp.task('serve', () => gulp.run('js', 'stylus', 'jade'));

gulp.task('watch', () => {
  gulp.watch('./src/js/*', () => gulp.run('js'));
  gulp.watch('./src/styl/*', () => gulp.run('stylus'));
  gulp.watch(['./src/jade/**/*.jade', './src/comparisons/**/*'], () =>
    gulp.run('jade')
  );
});

gulp.task('default', ['serve', 'watch']);
