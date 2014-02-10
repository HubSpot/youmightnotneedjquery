gulp = require('gulp')
stylus = require('gulp-stylus')
jade = require('gulp-jade')
coffee = require('gulp-coffee')

readTree = require('./readTree')

CAPS_WORDS = ['JSON', 'HTML', 'AJAX']
titleCase = (str) ->
  str = str.replace /(^|\b)([a-z])([a-z]+)/g, (match, space, first, rest) ->
    "#{ space }#{ first.toUpperCase() }#{ rest }"

  str = str.replace new RegExp("(?:^|\b)(#{ CAPS_WORDS.join('|') })(?:$|\b)", 'ig'), (match, word) ->
    word.toUpperCase()

  str

getNamePart = (str) ->
  str.split('.')[0]

fullLanguage = (ext) ->
  LANGS =
    js: 'javascript'
    css: 'css'

  LANGS[ext]

gulp.task 'coffee', ->
  gulp.src('./coffee/*')
    .pipe(coffee())
    .pipe(gulp.dest('./js/'))

gulp.task 'stylus', ->
  gulp.src('./styl/index.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('./css/'))

gulp.task 'jade', ->
  readTree (err, comparisons) ->
    if err
      console.error "Error loading comparisons tree", err
      return

    comps = []
    for title, comparison of comparisons
      comps.push {title, comparison}

    comps.sort (a, b) ->
      a.title.localeCompare b.title

    gulp.src('./jade/**/index.jade')
      .pipe(jade({pretty: true, data: {comparisons: comps, titleCase, getNamePart, fullLanguage}}))
      .pipe(gulp.dest('./'))

gulp.task 'default', ->

  gulp.run 'coffee', 'stylus', 'jade'

  gulp.watch './coffee/*', ->
    gulp.run 'coffee'

  gulp.watch './styl/*', ->
    gulp.run 'stylus'

  gulp.watch ['./jade/**/*.jade', './comparisons/**/*'], ->
    gulp.run 'jade'
