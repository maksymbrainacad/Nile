window.addEventListener('load', function() {
  $ajax({
    url: '/template/header_menu/motivators/data/motivators.json',      // запрос на сервер
    responseType: 'json',                       //  передаваемые данные в json формате
    success: function(img) {
      var imgCount = img.motivators.length,
          imgList = '',
          imgListPreview = '',
          i = 0;

      if (imgCount) {
        for (; i < imgCount; i++) {
          imgList += '<li> <img src="' + img.motivators[i].motivator.picture.medium + '"data-popup="' + img.motivators[i].motivator.picture.large + '" alt=""/></li>';             // путь в файле  где лежат картинки

          imgListPreview += '<li> <img src="' + img.motivators[i].motivator.picture.thumbnail + '" alt=""/></li>';   // путь в файле  где лежат картинки
        }
      }

      document.querySelector('[data-id="gallery-preview"]').innerHTML = imgList;

      document.querySelector('[data-id="gallery-thumbnails"]').innerHTML = imgListPreview;

      Gallery.init(document.querySelector('[data-id="gallery"]'));     // подключаем функцию галереи после получения и отрисовки мотиваторов от сервера

      Popup.init({
        queryBy: '[data-popup]',  // формируем модальные окна для всех имейджей у которых есть data-popup
        urlAtrr: 'data-popup'
      });
    }
  });
});
