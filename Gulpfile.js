/**
 * npm install gulpjs/gulp-cli -g
 * npm install gulpjs/gulp.git#4.0 --save-dev
 */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    inject       = require('gulp-inject'),
    browserSync  = require('browser-sync'),
    svg          = require('gulp-svgmin'),
    svgstore     = require('gulp-svgstore'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    path         = require('path');
    ghPages      = require('gulp-gh-pages');
    babel        = require('gulp-babel');

gulp.task('sass', function() {
  return gulp.src('./build/index.html')
    .pipe(inject(
      gulp.src('./source/sass/**/*.+(scss|sass)')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./build/assets/css')), {
          ignorePath: '/build',
          relative: true
        }
    ))
    .pipe(gulp.dest('./build'));
});

gulp.task('javascript', function() {
  return gulp.src('./build/index.html')
    .pipe(inject(
      gulp.src('./source/js/**/*.js')
        .pipe(babel())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./build/assets/js')), {
          ignorePath: '/build',
          relative:   true
        }
    ))
    .pipe(gulp.dest('./build'));
});

gulp.task('svg', function() {
  return gulp.src('./build/index.html')
    .pipe(inject(gulp.src('./source/images/**/*.svg')
      .pipe(svg(function(file) {
        return {
          plugins: [{
            cleanupIDs: {
              prefix: path.basename(file.relative, path.extname(file.relative)) + '-',
              minify: true
            }
          }]
        };
      }))
      .pipe(svgstore({
        inlineSvg: true,
      })), {
        transform: function(path, file) {
          return file.contents.toString();
        }
      }
    ))
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function() {
  return gulp.src('./source/images/**/*.+(png|jpeg|jpg|gif|mp4|ico|svg)')
    .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('index', gulp.series(
  function() {
    return gulp.src('./source/index.html')
      .pipe(gulp.dest('./build'));
  },
  'sass',
  'javascript',
  'svg'
));

gulp.task('cname', gulp.series(
  function() {
    return gulp.src('./source/CNAME')
      .pipe(gulp.dest('./build'));
  }
));

gulp.task('reset', function() {
  return require('del')('./build');
});

gulp.task('backup2012', gulp.series(
  function() {
    return gulp.src('./source/2012/**/*')
      .pipe(gulp.dest('./build/2012'));
  }
));

gulp.task('backup2013', gulp.series(
  function() {
    return gulp.src('./source/2013/**/*')
      .pipe(gulp.dest('./build/2013'));
  }
));

gulp.task('backup2014', gulp.series(
  function() {
    return gulp.src('./source/2014/**/*')
      .pipe(gulp.dest('./build/2014'));
  }
));

gulp.task('backup2015', gulp.series(
  function() {
    return gulp.src('./source/2015/**/*')
      .pipe(gulp.dest('./build/2015'));
  }
));

gulp.task('backup2016', gulp.series(
  function() {
    return gulp.src('./source/2016/**/*')
      .pipe(gulp.dest('./build/2016'));
  }
));

gulp.task('midia', gulp.series(
  function() {
    return gulp.src('./source/midia/**/*')
      .pipe(gulp.dest('./build/midia'));
  }
));

gulp.task('default', gulp.series(
  'reset',
  'index',
  'images',
  'cname',
  'backup2012',
  'backup2013',
  'backup2014',
  'backup2015',
  'backup2016',
  'midia',
  function() {
    browserSync({
      server: {
        baseDir: './build',
        notify: false
      }
    });

    gulp.watch('./source/*.html', gulp.series('index', browserSync.reload));
    gulp.watch('./source/sass/**/*.+(scss|sass)', gulp.series('sass'));
    gulp.watch('./source/js/**/*.js', gulp.series('javascript', browserSync.reload));
    gulp.watch('./source/svg/**/*.svg', gulp.series('svg', browserSync.reload));
    gulp.watch('./source/images/**/*.+(png|jpeg|jpg|gif|mp4|ico)', gulp.series('images', browserSync.reload));
  })
);

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});
