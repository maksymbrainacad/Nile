function $ajax(obj) {                           // функция формирующая запрос на сервер
  /*                                      // описание принимаемых данных
    obj: {
      method: 'GET'|'POST'|'POST'|'PUT'|'DELETE'
        | default: 'GET'
      url: String
      async: true|false
      | default: true
      responseType:
      | default: 'text'
      success: function() {}
      error: function() { console.error (responseText)}
      data: {}
      | default: null
  }
  */
  if (!obj) {            // проверка, если пользователь не ввел данные при запросе
    obj = {};
  }
  var method = obj.method || 'GET',
      url = obj.url,
      asynchronus = obj.async || true,
      responseType = obj.responseType || 'text',
      headers = obj.headers,
      success = obj.success,
      error = obj.error || function (req, aEvt) { console.error(req, aEvt); },
      data = obj.data || null;

      var req = new (XMLHttpRequest || ActiveXObject)();                   // в переменную положили команду создающую новый запрос на сервер
                                                                          //  c проверкой и поддержкой браузера ИЕ

      req.open(method, url, asynchronus);      // open - открыть новое соединение и сформируем запрос на сервер

      req.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // отправляем заголовок запроса для сервера

      if (headers) {
        var headerIndex;                                            // проходимся по обьекту и вписываем все заголовки и содержимое, 
        for (headerIndex in headers) {
          req.setRequestHeader(headerIndex, headers[headerIndex]);
        }
      }

      req.onreadystatechange = function (aEvt) {      // обработка запроса на ошибки после выполнения
        if (req.readyState === 4) {                   // readyState статус готовности к приемке запроса
          if (req.status === 200) {                   // status статус ответа от сервера
            if (responseType === 'json') {            // проверяем передаваемые данные на json содержимое
              var responseJson;

              try {
                responseJson = JSON.parse(req.responseText);
              } catch (e) {

              }
            }
            success && success(responseJson || req.responseText, req);
          } else {
            error(req, aEvt);
          }
        }
      };

      req.send(data);
}
