module.exports = function(grunt) {   // exports - модуль который экспортирует настройки
  grunt.initConfig({      // запускаем конфиг на выполнение
    pkg: grunt.file.readJSON('package.json'),  // говорим, считай данные с файла package.json

    jshint: {    // таска проверяющая синтатические ошибки в файлах
/*      default: [],   // указываем как запускать таску
      dev: []       // указываем как запускать таску    */
      options: {   // указываем опуии для jshint,
        jshintrc: '.jshintrc' // конфиг с правилами для игнора ошибок
      },
      all: ['app/**/*.js']  // указываем что все таски запускать одинаково, в папке app заходить во все папки и находить все .js файлы для проверки
    },

    less: {    // описываем опции для таски grunt-contrib-less (папка с лесс файлами лежит в апп для примера компиляции)
      prod: {
        files: {
          'dist/css/styles.css': 'app/less/style.less'  // описали куда скомпилировать ксс файл из какого лесс файла
        }
      },
      dev: {
        files: {
          '.temp/css/styles.css': 'app/less/style.less'  // описали куда скомпилировать ксс файл из какого лесс файла
        }
      }
    },
    includeSource: {           // заходит в  temp/index.html и выполняет инструкции описанные в ключе include:
      dev:{
        files: {
          '.temp/index.html': 'index.html'
        }
      }
    },
    clean: {                     // очищает содержимое папок
      prod: ['dist/**/*'],
      dev: ['.temp/**/*']
    },
    copy: {                // копирует файлы из src в dest
      dev: {
        files: [
          { expand: true, src: ['app/**/*.js'], dest: '.temp' },  // expand находит скрытые файлы
          { expand: true, src: ['app/**/*.html'], dest: '.temp' },  // expand находит скрытые файлы
          { src: ['node_modules/angular/angular.js'], dest: '.temp/node_modules/angular/angular.js' },
          { src: ['node_modules/angular-route/angular-route.min.js'], dest: '.temp/node_modules/angular-route/angular-route.min.js' },
          { src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: '.temp/node_modules/bootstrap/dist/css/bootstrap.min.css' }
        ]
      }
    },
    watch: {             //  следит за изменениями файлов в files:
      options: {livereload: true},  // автоматическая перезагрузка файлов в браузере
      files: ['./app/**/*.js']
    },
    express: {         // оперативный запуск виртуального сервера
      all: {
        options: {
          port: 3000,         // порт на каком запустить сервер
          hostname: 'localhost', // имя адресса сервера
          bases: ['.temp'],    // путь с которого сервер начнет показывать
          livereload: true    // автоматическая перезагрузка файлов в браузере
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:3000/index.html'
      }
    },
    wiredep: {        //
      dev: {
        src: '.temp/index.html'
      }
    },
    sitemap_xml: {
      files: [
        {
          src: '{,**/}*.html',
          dest: '.temp/app/build/sitemap.xml'
        }
      ],
      options: {
        siteRoot : 'index.html'
      }
    }
  });

  require('load-grunt-tasks')(grunt); // запускаем модуль load-grunt-tasks автоматического загрузчика для grunt тасков

  // grunt.loadNpmTasks('grunt-contrib-jshint'); // подгружаем установленную grunt-contrib-jshint таску, модуль для проверки js файлов на ошибки
  // grunt.loadNpmTasks('grunt-contrib-less'); // подгружаем установленную grunt-contrib-less таску, модуль для генерации лесс файла в ксс файл

  grunt.registerTask('default', ['jshint']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('dev', ['jshint', 'clean:dev',  'sitemap_xml', 'less:dev', 'copy:dev', 'wiredep:dev', 'includeSource:dev', 'express:all', 'open:all', 'watch']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('prod', ['clean:prod', 'less:prod']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('serve', []); // регистрируем таску, ????????????????????????????????????????
  grunt.registerTask('sitemap', ['sitemap_xml']); // регистрируем таску, ????????????????????????????????????????


};
