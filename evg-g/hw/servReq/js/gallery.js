;(function () {
  var activIndex = 0,
      previewListNodes,
      thumbnailsListNodes,
      galleryThumbnailsNode,
      activePreviewListNode,
      activeThumbnailsListNode;

  var setActive = function(index) {                      // установили активным элемент галереи
    if (activePreviewListNode && activeThumbnailsListNode) {  //проверяем есть ли элементы с классом 'active'
      activePreviewListNode.className = '';                  // очищаем эти классы
      activeThumbnailsListNode.className = '';
    }

    activePreviewListNode = previewListNodes[index];
    activeThumbnailsListNode = thumbnailsListNodes[index];

    activIndex = index;

    activePreviewListNode.className = 'active';             // присваеваем элементу по которому был клик класс 'active'
    activeThumbnailsListNode.className = 'active';
  };

  var init = function(galleryNode) {
    previewListNodes = galleryNode.querySelectorAll('[data-id="gallery-preview"] li');

    thumbnailsListNodes = galleryNode.querySelectorAll('[data-id="gallery-thumbnails"] li');

    setActive(0);

    galleryThumbnailsNode = galleryNode.querySelector('[data-id="gallery-thumbnails"]');

                                            // Начало: действия на клики по стрелкам для preview
    galleryNode.querySelector('[data-action="left"]').addEventListener('click', function() {
      var index = activIndex - 1;
      if (index < 0) {
        index = thumbnailsListNodes.length - 1;
      }
      setActive(index);
    });

    galleryNode.querySelector('[data-action="right"]').addEventListener('click', function() {
      var index = activIndex + 1;
      if (index > thumbnailsListNodes.length - 1) {
        index = 0;
      }
      setActive(index);
    });
                                            // Конец: действия на клики по стрелкам preview

                                            // Начало: действия на клики по стрелкам для thumbnails
    var actionsBtns = galleryNode.querySelectorAll('[data-action-thumbnails]');

    Array.prototype.forEach.call(actionsBtns, function(actionBtn) {   //запускаем метод forEach для коллекции нод actionsBtns как будто для массива
      actionBtn.addEventListener('click', function(e) {
        var action = e.target.getAttribute('data-action-thumbnails'),
            sign = action === 'left' ? -1 : 1,
            currentMarginLeft = parseInt(galleryThumbnailsNode.style.marginLeft || 0, 10);
              // проверка на положение картинок и запрет прокрутки в начале и конце линейки привьюшек
            if ((currentMarginLeft === 0 && sign === 1) || (currentMarginLeft * -1 >= (thumbnailsListNodes.length * 50 / 2) && sign === -1)) {
              return;
            }

            galleryThumbnailsNode.style.marginLeft =(currentMarginLeft + 50 * sign) + 'px';
      });
    });

                                            // Конец: действия на клики по стрелкам thumbnails

    galleryThumbnailsNode.addEventListener('click', function(e) {
      if (e.target !== e.currentTarget) {
        var i = 0,
            thumbnailsListNodesLength = thumbnailsListNodes.length;

        for (; i < thumbnailsListNodesLength; i++) {
          if (thumbnailsListNodes[i] === e.target.parentNode) {
            activIndex = i;
            break;
          }
        }
        setActive(i);
      }
    });
  };

  window.Gallery = {         // создали глобальный обьект, для того чтоб подгрузить нашу функцию по мере надобности
    init: init
  };
})();
