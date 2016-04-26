window.addEventListener('load', function() {
  var mainHeader = document.querySelector('[data-id="main-header"]');
  var mainContent = document.getElementById('content');
  var mainFooter = document.getElementsByClassName('main-footer')[0];

  setTimeout(function() {
    mainContent.innerHTML = 'New Content';
  }, 3000);

  setTimeout(function() {
    mainFooter.innerHTML = 'New Footer';
  }, 5000);

  /*==================*/

  var ulNode = mainHeader.querySelector('ul');

  mainHeader.addEventListener('click', function() {
    console.log('mainHeader');
  });

  ulNode.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
      e.target.innerHTML += 'a';
    }

    e.stopPropagation();
    return false;
  });

  ulNode.addEventListener('dblclick', function(e) {
    if (e.target !== e.currentTarget) {
      var liText = e.target.innerHTML;
      var currentNode = e.target ;

      /*e.target.innerHTML = '<input type="text" value="' + value + '" />';

      var input = e.target.querySelector('input');*/

      var input = document.createElement('input');
      input.type = 'text';
      input.value = liText;
      input.onkeypress = function(e) {
        if (e.keyCode == 13) {
          currentNode.innerHTML = this.value;
        }
      };

      currentNode.innerHTML =
      ;

      currentNode.appendChild(input);
      //currentNode.removeChild(input);

    }

    e.stopPropagation();
    return false;
  });


  /*=============*/
  var liNodes = mainHeader.querySelectorAll('li'); //[1,2,3]

  /*1)*/

  for (var i = 0, len = liNodes.length; i > len; i++) {
    liNodes[i].addEventListener('click');
  }

  Array.prototype.forEach.call(liNodes, function(node) {
    node.addEventListener('click');
  });

});
