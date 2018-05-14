// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var concat = require('gulp-concat'); /* concatena vários arquivos em um único */
var rename = require('gulp-rename'); /* renomeia o arquivo de destino */
var uglify = require('gulp-uglify'); /* minifica os aqruivos JS */
var broswerSync = require('browser-sync'); /* utilizado para atualizar o browser durante os testes */
var imagemin = require('gulp-imagemin'); /* minifica as imagens */
var changed = require('gulp-changed'); /* verifica se já houve modificações nos arquivos */

gulp.task('default', ['lib', 'img-compress', 'materialize', 'html-compiler', 'css-compiler', 'script-compiler', 'watch-tasks', 'server']);

// iniciando o servidor
gulp.task('server', function(){
    broswerSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

/* copiando os html's */
gulp.task('html-compiler', function(){
    gulp.src('./dev/*.html')
    .pipe(gulp.dest('./dist'));
});

/* copiando os css */
gulp.task('css-compiler', function(){
    gulp.src('./dev/css/**/*.css')
    .pipe(gulp.dest('./dist/css'));
});

/* copiando e minificando o JS */
gulp.task('script-compiler', function(){
    gulp.src('./dev/js/**/*.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);
    }))
    .pipe(gulp.dest('./dist/js'));
});

/* copiando os arquivos de css do bootstrap */
gulp.task('bootstrap', function(){
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dist/css/bootstrap'));
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css')
    .pipe(gulp.dest('./dist/css/bootstrap'));
    gulp.src(['./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
              './node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
              './node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
              './node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
              './node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'])
    .pipe(gulp.dest('./dist/css/fonts'));
});

gulp.task('materialize', function(){
    gulp.src('./node_modules/materialize-css/dist/css/materialize.min.css')
    .pipe(gulp.dest('./dist/css/materialize-css'));
});

/* copiando, concatenando, renomeando e minificando os arquivos JS para um arquivo */
gulp.task('lib', function(){
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                     './node_modules/angular/angular.min.js',
                     './node_modules/materialize-css/dist/js/materialize.min.js'
                    //  './node_modules/bootstrap/dist/js/bootstrap.min.js',
                     ])
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/lib'));
});

/* minificando as imagens do projeto */
gulp.task('img-compress', function(){
    gulp.src(['./dev/img/*.png', './dev/img/*jpg'])
    .pipe(changed('./dist/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

/* verificando alterações nos arquivos enquanto o projeto está em execução */
gulp.task('watch-tasks', function(){
    gulp.watch('./dev/**/*.html', ['html-compiler']).on('change', broswerSync.reload);
    gulp.watch('./dev/css/**/*.css', ['css-compiler']).on('change', broswerSync.reload);
    gulp.watch('./dev/js/**/*.js', ['script-compiler']).on('change', broswerSync.reload);
});