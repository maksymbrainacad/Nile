'use strict';

function update (id, funct) {
  var ul = document.getElementById(id);
  var li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    li[i].innerHTML = funct(li[i].innerHTML)
    }
}

update ('list1', function (value) {return +value / 9});
