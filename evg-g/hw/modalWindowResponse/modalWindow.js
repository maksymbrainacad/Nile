window.addEventListener('load', function() {
  var modalBtn = document.querySelector('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0], // [0] берем первый элемент из коллекции нод
      zIndex = 1000,
      modalTemplate;
  var modalNode = modalsOverlayNode.querySelector('[data-modal-id]');


  modalBtn.addEventListener('click', function(e) {
    modalsOverlayNode.style.display = 'block';
    modalNode.style.display = 'block';
    modalNode.style.zIndex = zIndex++;
  });
});
