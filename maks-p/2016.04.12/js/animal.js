;(function() {
  'use strict';

  function Animal(type) {
    this.type = type;
  }

  Animal.prototype.getData = function (success, error) {
    var successBind = success.bind(this);
    var errorBind = error.bind(this);

    $ajax({
      url: '/animals/' + this.type + '.json',
      success: successBind,
      error: errorBind
    });
  };

  if (!window.constructors){
    window.constructors = {};
  }

  window.constructors.Animal = Animal;
})();
