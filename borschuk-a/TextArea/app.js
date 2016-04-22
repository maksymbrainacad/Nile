var textarea = document.querySelector('[data-id="text-area"]'),
    button = document.querySelector('[data-id="button"]'),
    editBlock = document.querySelector('[data-id="edit-block"]');

button.addEventListener('click', function() {

  var  textareaInput = textarea.value;
  var  editBlockText = textarea.value.split(' ');
  var  editBlockTextLength = editBlockText.length;
  var editBlockTextArr = arguments.length;

  var i = 0;
  for(; i < editBlockTextLength; i++ ) {

    editBlockText[i] = '<span>' + editBlockText[i] + '</span>';
  }

  editBlockText = editBlockText.join(' ');

  editBlock.innerHTML = editBlockText;

});


editBlock.addEventListener('click', function(e) {

  if (e.target != e.currentTarget) {
    e.target.style.display = 'none';

  }
  e.stopPropagation();
  return false;

});
