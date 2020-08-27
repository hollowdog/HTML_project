const gulp = require("gulp")
const rename = require("gulp-rename")
const scss = require("gulp-sass")
const connect = require("gulp-connect")
const minifycss = require("gulp-minify-css")
const htmlmin = require("gulp-htmlmin")


gulp.task("hello",function(){
  console.log("hello")
})
// 复制html
gulp.task("copy-html",function(){
  return gulp.src("html/*.html")
  .pipe(htmlmin({
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  }))
  .pipe(gulp.dest("adist/"))
  .pipe(connect.reload())
})
// 复制image
gulp.task("images",function(){
  return gulp.src("images/*")
  .pipe(gulp.dest("adist/images"))
  .pipe(connect.reload())
})
// 复制data
gulp.task("data",function(){
  return gulp.src("data/*.json")
  .pipe(gulp.dest("adist/data"))
  .pipe(connect.reload())
})
// 处理scss
gulp.task("scss",function(){
  return gulp.src("stylesheet/*.scss")
  .pipe(scss())
  .pipe(minifycss())
  .pipe(gulp.dest("adist/css"))
  .pipe(connect.reload())
})
// 复制js
gulp.task("script",function(){
  return gulp.src("script/*.js")
  .pipe(gulp.dest("adist/js"))
  .pipe(connect.reload())
})


gulp.task("iconfont",function(){
  return gulp.src("iconfont/*")
  .pipe(gulp.dest("adist/iconfont"))
  .pipe(connect.reload())
})

// php
gulp.task("php",function(){
  return gulp.src("php/*.php")
  .pipe(gulp.dest("adist/php"))
  .pipe(connect.reload())
})

// build
gulp.task("build",["copy-html","data","images","scss","script","iconfont","php"],function(){
  console.log("首次执行")
})
// 监听
gulp.task("watch",function(){
  gulp.watch("html/*.html",["copy-html"])
  gulp.watch("images/*",["images"])
  gulp.watch("data/*.json",["data"])
  gulp.watch("stylesheet/*.scss",["scss"])   
  gulp.watch("script/*.js",["script"])
  gulp.watch("iconfont/*",["iconfont"])
  gulp.watch("php/*.php",["php"])
  console.log("超级瞄准已加载")
})
// 临时服务器
gulp.task("server",function(){
  connect.server({
    root:"adist",
    port:8889,
    livereload:true,
  })
  console.log("超视距联营已部署")
})
// default
gulp.task("default",["watch","server"])
