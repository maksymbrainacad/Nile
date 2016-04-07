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

                                                                                            // действия на кликb по стрелкам
    galleryNode.querySelector('[data-action="left"]').addEventListener('click', function() {
      var index = activIndex - 1;
      if (index < 0) {
        index = thumbnailsListNodes.length - 1;
      }
      setActive(index);
      console.log(index);
    });

    galleryNode.querySelector('[data-action="right"]').addEventListener('click', function() {
      var index = activIndex + 1;
      if (index > thumbnailsListNodes.length - 1) {
        index = 0;
      }
      setActive(index);
      console.log(index);
    });
                                                                                        //===================

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
