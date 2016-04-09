window.addEventListener('load', function() {
  $ajax({
    url: 'http://api.randomuser.me/?results=10',                         // запрос на сервер randomuser.me данных пользователей в кол-ве result=10
    responseType: 'json',                       //  передаваемые данные в json формате
    success: function(users) {
      var usersCount = users.results.length,
          usersList = '',
          usersListPreview = '',
          i = 0;

      if (usersCount) {
        for (; i < usersCount; i++) {
          usersList += '<li> <img src="' + users.results[i].picture.medium + '"data-popup="' + users.results[i].picture.large + '" alt=""/></li>';             // путь в файле  где лежат картинки

          usersListPreview += '<li> <img src="' + users.results[i].picture.thumbnail + '" alt=""/></li>';   // путь в файле  где лежат картинки
        }
      }

      document.querySelector('[data-id="gallery-preview"]').innerHTML = usersList;

      document.querySelector('[data-id="gallery-thumbnails"]').innerHTML = usersListPreview;

      Gallery.init(document.querySelector('[data-id="gallery"]'));     // подключаем функцию галереи после получения и отрисовки фоток юзеров от сервера

      Popup.init({
        queryBy: '[data-popup]',  // формируем модальные окна для всех имейджей у которых есть data-popup
        urlAtrr: 'data-popup'
      });
    }
  });
});
