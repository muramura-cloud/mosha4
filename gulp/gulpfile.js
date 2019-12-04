const fs=require('fs');
const gulp=require('gulp');
const sass=require('gulp-sass');
const postcss=require('gulp-postcss');
const autoprefixer=require('autoprefixer');
const flexBugsFixes=require('postcss-flexbugs-fixes');
const cssWring=require('csswring');
const ejs=require('gulp-ejs');
const rename=require('gulp-rename');
const browserSync=require('browser-sync').create()
const ejsSettingOption = {
  ext: '.html'
}
const autoprefixerOption={
  grid: true
}
const postcssOption=[
  flexBugsFixes,
  autoprefixer(autoprefixerOption)
]
const browserSyncOption={
  server: './dist'
}

gulp.task('sass',()=>{
  return gulp
  .src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(postcss(postcssOption))
  .pipe(gulp.dest('./dist'))
})
gulp.task('ejs',()=>{
  return gulp
  .src('./src/html/*.ejs')
  .pipe(ejs({}, {}, ejsSettingOption))
  .pipe(rename({ extname: ".html" }))
  .pipe(gulp.dest('./dist'))
})
gulp.task('serve',(done)=> {
  browserSync.init(browserSyncOption)
  done()
})
gulp.task('reload',(done)=>{
  const browserReload=(done)=> {
    browserSync.reload()
    done()
  }
})
gulp.task('watch',(done)=>{
  gulp.watch('./src/scss/**/*.scss',gulp.series('sass'));
  gulp.watch('./src/html/*.ejs',gulp.series('ejs'));
  done()
})
