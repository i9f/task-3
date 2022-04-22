import gulp from 'gulp';
import browserSync from 'browser-sync';
import { paths } from '../config/path.js';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; //сжатие цсс
import autoPrefixer from 'gulp-autoprefixer'; //добавление префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //группировка медиа-запросов
import gulpMode from 'gulp-mode';
import gulpSourcemaps from 'gulp-sourcemaps';

const mode = gulpMode();
const { src, dest } = gulp;
const sass = gulpSass(dartSass);

export function styles() {
  return src(paths.src.styles)
    .pipe(mode.development(gulpSourcemaps.init()))
    .pipe(
      gulpPlumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      mode.production(
        autoPrefixer({
          grid: true,
          cascade: true,
        })
      )
    )
    // .pipe(dest(paths.dist.styles)) //раскомментировать, если нужен исходный файл
    .pipe(mode.production(cleanCss()))
    .pipe((
      rename({
        extname: '.min.css',
      }))
    )
    .pipe(mode.development(gulpSourcemaps.write()))
    .pipe(dest(paths.dist.styles))
    .pipe(browserSync.stream());
}
