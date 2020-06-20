var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
const nodemon = require("gulp-nodemon");
const prefix = require("gulp-autoprefixer");
const reload = browserSync.reload;

gulp.task("browser-sync", function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.html").on("change", reload);
  gulp.watch("./scss/**/*.scss", gulp.series("css"));
});

gulp.task("css", () => {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("browser-sync","css"));
