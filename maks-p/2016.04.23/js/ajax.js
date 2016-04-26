window.addEventListener('load', function() {
  var req = new (XMLHttpRequest || ActiveXObject)();

  req.open('GET', '/data/user.json', true);

  req.onreadystatechange = function() {
    if (req.readyState === 3) {
        console.log('processing request');
    }

    if (req.readyState === 4 && req.status === 200) {
      console.log(JSON.parse(req.responseText));
    }
  }

  req.send(null);

  document.querySelector('[name="send"]')
    .addEventListener('click', function() {
      var name = document.querySelector('[name="name"]').value;

      var reqPost = new (XMLHttpRequest || ActiveXObject)();

      reqPost.open('POST', '/newName', true);

      reqPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      reqPost.onreadystatechange = function() {
        if (reqPost.readyState === 3) {
            console.log('processing request');
        }

        if (reqPost.readyState === 4) {
          if (reqPost.status === 200) {
            console.log('Sended');
          } else if (reqPost.status === 404) {
            console.error('Not found');
          }

        }
      }

      reqPost.send('name=' + name + '&age=2');
    });
});
