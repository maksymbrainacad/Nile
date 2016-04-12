;(function() {
  'use strict';

  var config = {},
      template;

  var showPopup = function(e) {
    var url = e.target.getAttribute(config.urlAtrr);

    var onTamplateLoaded = function () {
      var popupHandlebars = Handlebars.compile(template); // формируем новое модальное окно на лету из принятой json строки
                                                                //  Handlebars.compile(template) возвращает функцию нашего шаблона
      var popupHtml = popupHandlebars({
        modalId: '',
        name: '',
        content: '<img src="' + url + '">',
        footer: ''
      });

      var popupEl = document.createElement('div');
      popupEl.innerHTML = popupHtml;
      document.body.appendChild(popupEl);  // добавили отрисованное окно в хтмд структуру последним элементом
    };


    if (template) {
      onTamplateLoaded();
    } else {
        $ajax({
          url: '/templates/modal.html',
          success: function(result) {
            template = result;
            onTamplateLoaded();
          }
        });
      }
  };

  var init = function(userConfig) {
    config = userConfig;

    var popupNodes = document.querySelectorAll(userConfig.queryBy);   // достаем все элементы для галереи

    Array.prototype.forEach.call(popupNodes, function(popupNode) {
      popupNode.addEventListener('click', showPopup);
    })
  };

  window.Popup = {
    init: init
  };
})();
