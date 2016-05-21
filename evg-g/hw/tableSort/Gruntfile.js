module.exports = function(grunt) {   //модуль который экспортирует настройки
  grunt.initConfig({      // запускаем конфиг на выполнение
    pkg: grunt.file.readJSON('package.json'),  // говорим, считай данные с файла package.json

    jshint: {    // тут мы также можем указать ключи и внести данные в переменные для файла package.json
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
          'temp/css/styles.css': 'app/less/style.less'  // описали куда скомпилировать ксс файл из какого лесс файла
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt); // запускаем модуль load-grunt-tasks автоматического загрузчика для grunt тасков

  // grunt.loadNpmTasks('grunt-contrib-jshint'); // подгружаем установленную grunt-contrib-jshint таску, модуль для проверки js файлов на ошибки
  // grunt.loadNpmTasks('grunt-contrib-less'); // подгружаем установленную grunt-contrib-less таску, модуль для генерации лесс файла в ксс файл

  grunt.registerTask('default', ['jshint']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('dev', ['jshint', 'less']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('prod', ['less']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production
  grunt.registerTask('serve', []); // регистрируем таску, ????????????????????????????????????????


};
