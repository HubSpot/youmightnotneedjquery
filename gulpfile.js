const gulp = require('gulp');
const stylus = require('gulp-stylus');
const jade = require('gulp-jade');

process.chdir('./src');

const readTree = require('./src/readTree');

const CAPS_WORDS = ['JSON', 'HTML', 'AJAX'];
function titleCase(str) {
  str = str.replace(
    /(^|\b)([a-z])([a-z]+)/g,
    (match, space, first, rest) => `${space}${first.toUpperCase()}${rest}`
  );

  str = str.replace(
    new RegExp(`(?:^|\b)(${CAPS_WORDS.join('|')})(?:$|\b)`, 'ig'),
    (match, word) => word.toUpperCase()
  );

  return str;
}

function getNamePart(str) {
  return str.split('.')[0];
}

function fullLanguage(ext) {
  const LANGS = {
    js: 'javascript',
    css: 'css',
  };

  return LANGS[ext];
}

gulp.task('js', () => gulp.src('./js/*').pipe(gulp.dest('../js/')));

gulp.task('stylus', () =>
  gulp
    .src('./styl/index.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('../css/'))
);

gulp.task('jade', () =>
  readTree((err, comparisons) => {
    if (err) {
      console.error('Error loading comparisons tree', err);
      return;
    }

    const comps = [];
    for (const [title, comparison] of Object.entries(comparisons))
      comps.push({title, comparison});

    comps.sort((a, b) => a.title.localeCompare(b.title));

    return gulp
      .src('./jade/**/index.jade')
      .pipe(
        jade({
          pretty: true,
          data: {comparisons: comps, titleCase, getNamePart, fullLanguage},
        })
      )
      .pipe(gulp.dest('../'));
  })
);

gulp.task('serve', () => gulp.run('js', 'stylus', 'jade'));

gulp.task('watch', () => {
  gulp.watch('./js/*', () => gulp.run('js'));
  gulp.watch('./styl/*', () => gulp.run('stylus'));
  gulp.watch(['./jade/**/*.jade', './comparisons/**/*'], () =>
    gulp.run('jade')
  );
});

gulp.task('default', ['serve', 'watch']);
