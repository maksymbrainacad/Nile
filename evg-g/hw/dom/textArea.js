'use strict';
window.addEventListener('load', function() {
  var textAreaNode = document.querySelector('[data-id="textArea"]'),
      actionsNode = document.querySelector('[data-id="actions"]'),
      animationText = document.querySelector('[data-id="animationText"]');

  actionsNode.addEventListener('click', function(e) {

      var textAreaInput = textAreaNode.value;
      var transformText = textAreaInput.split( );
      var transformTextLength = transformText.length;
      var i = 0;

      for (; i < transformTextLength; i++) {
          
      }

      document.querySelector('[data-id="animationText"]').innerHTML = textAreaInput;

      console.log(textAreaInput);
    e.stopPropagation();
    return false;
  });
});
