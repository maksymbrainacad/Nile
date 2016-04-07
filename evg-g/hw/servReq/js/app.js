window.addEventListener('load', function() {
  $ajax({
    url: '/user.json',                         // запрос на сервер randomuser.me данных пользователей в кол-ве result=5
    responseType: 'json',                       //  передаваемые данные в json формате
    headers: {
      // 'Access-Control-Allow-Headers': '*',         // можем отправить любые заголовки
      // 'Access-Control-Allow-Origin': '*',          // можем отправить любое содержание
      // 'Access-Control-Request-Method': '*'  //
    },
    success: function(users) {
      var usersCount = users.results.length,
          usersList = '',
          usersListPreview = '',
          i = 0;

      if (usersCount) {
        for (; i < usersCount; i++) {
          usersList += '<li> <img src="' + users.results[i].user.picture.medium + '" alt=""/></li>';               // путь в файле json где лежат картинки

          usersListPreview += '<li> <img src="' + users.results[i].user.picture.thumbnail + '" alt=""/></li>';               // путь в файле json где лежат картинки
        }
      }

      document.querySelector('[data-id="gallery-preview"]').innerHTML = usersList;

      document.querySelector('[data-id="gallery-thumbnails"]').innerHTML = usersListPreview;

      Gallery.init(document.querySelector('[data-id="gallery"]'));     // подключаем функцию галереи после получения и отрисовки фоток юзеров от сервера
    }
  });
});
