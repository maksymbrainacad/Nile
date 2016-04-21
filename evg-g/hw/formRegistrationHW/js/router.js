(function() {
  'use strict';

  var $templateCache = {};          // сюда будем ложить шаблоны
  var prevHash = '';

  function router() {
    var url = location.hash.split('/');   //location глобальный обьект который хранит данные о местоположении пользователя
    var currentPage = url[1] || 'main';
    var contentNode = document.querySelector('[data-id="content"]');

    var pages = {                               //делаем новую хтмл страницу main
      main: {
        title: 'Main page',
        view: '<h1>Welcome</h1>'
      },
      contact: {
        authorization: true,
        title: 'Contact page',
        view: '<h1>Have Contact</h1>'
      },
      about: {                                       //делаем новую хтмл страницу about
        authorization: true,
        title: 'About page',
        view: '<h1>About</h1>',
        controller: function() {                  // навешиваем обработчики на нашу новую хтмл
          this.querySelector('h1').addEventListener('click', function() {
            console.log('about controller');
          });
        }
      },
      '404': {
        title: '404',
        view: '<h1>Page Not Found</h1>'
      },
      login: {
        title: 'Login',
        viewUrl: '/templates/login.html',                    //!!!!!!!!!!!!!!!!!!!! ПОДКЛЮЧАЕМ ВНЕШНИЙ ФАЙЛ !!!!!!!!!!!!!!
        controller: 'Login'
      }
    };



    var page = pages[currentPage] || pages['404']; // если адресса страницы после # не существует, выводим страницу 404

    if (page.authorization) {                                    // проверка на авторизацию
      var user = JSON.parse(localStorage.getItem('user'));

      if (!user) {
        prevHash = location.hash;                                             // если авторизации нет, перенаправляем на страницу авторизации
        location.hash = '#/login';
      }
    }

    if (page.view || $templateCache[page.viewUrl]) {                           // проверяем есть ли  view у нашей page или шаблон в кэше
      contentNode.innerHTML = page.view || $templateCache[page.viewUrl];
    } else if (page.viewUrl) {                //  в противном случае подкидываем внешнюю страницу формируя ajax запрос
      $ajax({
        url: page.viewUrl,
        success: function(template) {
          contentNode.innerHTML = template;
          $templateCache[page.viewUrl] = template;  // записали наш шаблон в переменную $templateCache
        },
        error: function() {
          location.hash = '#/404';
        }
      });
    }


    if ( typeof page.controller === 'function') {                 // проверяем тип контроллера и:
      page.controller.call(contentNode, prevHash);  // навесили на них обработчики
    } else if (typeof page.controller === 'string') {

      if (window[page.controller]) {
        window[page.controller].call(contentNode, prevHash);
      } else {
        var scriptNode = document.createElement('script');

        scriptNode.type = 'text/javascript';
        scriptNode.async = 'async';
        scriptNode.src = '/js/controllers/' + page.controller + '.js';
        scriptNode.onload = function() {
          window[page.controller].call(contentNode, prevHash);
        };

        document.head.appendChild(scriptNode);
        }
      }

    if (page.title) {
      document.title = page.title;
    }

  }

  window.addEventListener('hashchange', router);  // обработчик на урл все что после #
  window.addEventListener('load', router);  // после загрузки страницы вызываем функцию router

})();
