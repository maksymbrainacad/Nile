window.addEventListener('load', function() {
  var req = new (XMLHttpRequest  || ActiveXObject)();          //создали новый ajax запрос на сервер (ActiveXObject - для ИЕ), создается для каждого нового запроса и используется один раз

  req.open('GET', '/data/user.json', true);   //открыли новый ajax запрос на сервер указывая метод, путь и способ загрузки (true-асинхронный, false - синхронный)

  req.onreadystatechange = function() {     // onreadystatechange - описывае что произойдет при изменении состояния (readyState) запроса
    if (req.readyState === 3) {    // readyState состояние запроса
      console.log('processing reqest');
    }

    if (req.readyState === 4 && req.status === 200) {
      console.log(JSON.parse(req.responseText));        //responseText то что приходит от сервера(приходит строкой), JSON.parse распарсивает строку в обьект
    }
  }
  req.send(null); //отправить запрос на сервер, null - не передавать ни каких данных




  document.querySelector('[name="send"]').addEventListener('click', function() {
    var name = document.querySelector('[name="name"]').value;   // .value  получили значение вписанное в поле [name="name"]

    var reqPost = new (XMLHttpRequest  || ActiveXObject)();          //создали новый ajax запрос на сервер (ActiveXObject - для ИЕ), создается для каждого нового запроса и используется один раз

    reqPost.open('POST', '/newName', true);   //открыли новый ajax запрос на сервер указывая метод, путь и способ загрузки (true-асинхронный, false - синхронный)

    reqPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // setRequestHeader указываем какой заголовок пойдет на сервер при запросе ("application/x-www-form-urlencoded" - для отправки форм)

    reqPost.onreadystatechange = function() {     // onreadystatechange - описывае что произойдет при изменении состояния (readyState) запроса
      if (reqPost.readyState === 3) {    // readyState состояние запроса
        console.log('processing reqest');
      }

      if (reqPost.readyState === 4) {
        if (reqPost.status === 200) {
          console.log('Запрос прошел');
        } else if (reqPost.status === 404) {
          console.error('Not found');
        }

      }
    }
    reqPost.send('name=' + name + '&age=2'); //отправить запрос на сервер, передаем данные в запросе строкой без пробелов, через разделитель &

  });
});
