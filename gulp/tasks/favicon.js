import gulp from 'gulp';
import { paths } from '../config/path.js';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import gulpMode from 'gulp-mode';
import favicons from 'gulp-favicons'

const mode = gulpMode();
const { src, dest } = gulp;

export function favicon() {
    return src(paths.src.favicon)
        .pipe(
            gulpPlumber(
                notify.onError({
                    title: 'FAVICON',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(dest(paths.dist.favicon)) //сохранение оригинального изображения
        .pipe(
            favicons({
                icons:{
                    windows:false,
                    firefox:false,
                    yandex:false
                }
            })
        )
        .pipe(dest(paths.dist.favicon))
        .pipe(browserSync.stream());
}