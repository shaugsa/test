const {src, dest} = require('gulp');

// Plagins
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const path = require('../../config/path.js');
const app = require('../../config/app.js')


const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileinclude())
    .pipe(size({ title : "До сжатия"}))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title : "После сжатия"}))
    .pipe(dest(path.html.dest))
}

module.exports = html;