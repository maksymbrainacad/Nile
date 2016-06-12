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
        content: '<img class="img-responsive" src="' + url + '">',
        footer: ''
      });

      var popupEl = document.createElement('div');
      popupEl.className = "modal-window";
      popupEl.innerHTML = popupHtml;
      document.body.appendChild(popupEl);  // добавили отрисованное окно в хтмд структуру последним элементом

     closePopup(popupEl);  // навесили обработчики событий на модальное окно
    };


    if (template) {
      onTamplateLoaded();
    } else {
        $ajax({
          url: '/template/header_menu/motivators/modal_window/modal.html',
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



  var closePopup = function(e) {
    var popupElNode = document.getElementsByClassName('modal-window'),
        modalsOverlayNode = document.querySelector('[data-action="close-modal"]');

      modalsOverlayNode.addEventListener('click', function(e) {
        var btnCloseNode = document.querySelector('[data-action="close"]'),
            modalsOverlay = e.currentTarget,
            btnClose = e.target;

        if (modalsOverlay === btnClose || btnCloseNode === btnClose) {
           document.body.removeChild(popupElNode[0]);
        }

        e.stopPropagation();
        return false;
      });
  };



  window.Popup = {
    init: init
  };
})();
