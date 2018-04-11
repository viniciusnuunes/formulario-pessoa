// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var broswerSync = require('browser-sync');

gulp.task('default', ['lib', 'bootstrap', 'html-compiler', 'css-compiler', 'script-compiler', 'watch-tasks', 'server']);

// iniciando o servidor
gulp.task('server', function(){
    broswerSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('html-compiler', function(){
    gulp.src('./dev/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('css-compiler', function(){
    gulp.src('./dev/css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('script-compiler', function(){
    gulp.src('./dev/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('bootstrap', function(){
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dist/css/bootstrap'));
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css')
    .pipe(gulp.dest('./dist/css/bootstrap'));
});

gulp.task('lib', function(){
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                     './node_modules/angular/angular.min.js',
                     './node_modules/bootstrap/dist/js/bootstrap.min.js',])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('watch-tasks', function(){
    gulp.watch('./dev/*.html', ['html-compiler']).on('change', broswerSync.reload);
    gulp.watch('./dev/css/*.css', ['css-compiler']).on('change', broswerSync.reload);
    gulp.watch('./dev/js/*.js', ['script-compiler']).on('change', broswerSync.reload);
});

