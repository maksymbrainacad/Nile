window.addEventListener('load', function() {
  var animalTypeInput = document.querySelector('[data-id="animal-type"]'),
      animalTypesSelect = document.querySelector('[data-id="animal-types"]'),
      createButton = document.querySelector('[data-action="create"]'),
      getDataButton = document.querySelector('[data-action="getData"]'),
      deleteButton = document.querySelector('[data-action="delete"]'),
      deleteAllButton = document.querySelector('[data-action="deleteAll"]'),
      resultBox = document.querySelector('[data-id="result"]');

  var localAnimals = JSON.parse(localStorage.getItem('animals')) || [];

  window.animals = {};

  var animalsList = '';

  localAnimals.forEach(function(animalType) {
    animals[animalType] = new constructors.Animal(animalType);

    /*var option = document.createElement('option');

    option.value = animalType;
    option.innerHTML = animalType;
    animalTypesSelect.appendChild(option);*/

    animalsList += '<option value="' + animalType + '">' + animalType + '</option>';
  });

  animalTypesSelect.innerHTML += animalsList;

  createButton.addEventListener('click', function() {
    var animalType = animalTypeInput.value;

    if (animalType && !animals[animalType]) {
      animals[animalType] = new constructors.Animal(animalType);

      if (localAnimals.indexOf(animalType) === -1) {
        localAnimals.push(animalType);

        localStorage.setItem('animals', JSON.stringify(localAnimals));
      }

      var option = document.createElement('option');

      option.value = animalType;
      option.innerHTML = animalType;
      animalTypesSelect.appendChild(option);

      animalTypeInput.value = '';
    }
  });

  getDataButton.addEventListener('click', function() {
    var selectedAnimal = animalTypesSelect.value;

    if (selectedAnimal) {
      animals[selectedAnimal].getData(function(data) {
        resultBox.innerHTML = data;

        this.data = JSON.parse(data);
      }, function(error) {
        resultBox.innerHTML = 'Not found.';
        console.error(error);
      });
    }
  });

  deleteButton.addEventListener('click', function() {
    var selectedAnimal = animalTypesSelect.value;

    if (selectedAnimal) {
      delete animals[selectedAnimal];

      localAnimals.splice(localAnimals.indexOf(selectedAnimal), 1);
      localStorage.setItem('animals', JSON.stringify(localAnimals));

      animalTypesSelect.querySelector('option[value="' + selectedAnimal + '"]').remove();
    }
  });

  deleteAllButton.addEventListener('click', function() {
    localStorage.removeItem('animals');

    animals = {};

    animalTypesSelect.innerHTML = '<option value="" disabled="">-- Select --</option>';

    /*while (animalTypesSelect.lastChild) {
      if (animalTypesSelect.lastChild.value) {
        animalTypesSelect.removeChild(animalTypesSelect.lastChild)
    }*/
  });
});
