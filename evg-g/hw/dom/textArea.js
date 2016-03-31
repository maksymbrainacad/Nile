'use strict';
window.addEventListener('load', function() {
  var textAreaNode = document.querySelector('[data-id="textArea"]'),
      actionsNode = document.querySelector('[data-id="actions"]'),
      animationTextNode = document.querySelector('[data-id="animationText"]');

  actionsNode.addEventListener('click', function(e) {

      var textAreaInput = textAreaNode.value,
          transformText = textAreaInput.split(' '),
          transformTextLength = transformText.length,
          transformTextArr =[],
          i = 0;

      for (; i < transformTextLength; i++) {
        transformTextArr[i] = '<span>' + transformText[i] + '</span>';
      }

      transformTextArr = transformTextArr.join(' ');

      document.querySelector('[data-id="animationText"]').innerHTML = transformTextArr;

    e.stopPropagation();
    return false;
  });

  animationTextNode.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {                           // определили на каком месте по странице был клик
       e.target.style.display = 'none';
    }

    e.stopPropagation();
    return false;
  });
});
