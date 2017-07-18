window.addEventListener('load', function() {
  var animalTypeInput = document.querySelector('[data-id="animal-type"]'),
      animalTypesSelect = document.querySelector('[data-id="animal-types"]'),
      createButton = document.querySelector('[data-action="create"]'),
      getDataButton = document.querySelector('[data-action="getData"]'),
      deleteButton = document.querySelector('[data-action="delete"]'),
      deleteAllButton = document.querySelector('[data-action="deleteAll"]'),
      resultBox = document.querySelector('[data-id="result"]');

  var localAnimals = JSON.parse(localStorage.getItem('animals')) || []; // тянем данные в переменную из localStorage

      window.animals = {};

      var animalList = '';

      localAnimals.forEach(function(animalType) {
        animals[animalType] = new constructors.Animal(animalType);

        var option = document.createElement('option');

        animalList += '<option value=""' + animalType + '">' + animalType + '</option>';

        animalTypesSelect.innerHTML += animalList;
      });

  createButton.addEventListener('click', function() {
    var animalType = animalTypeInput.value;

    if (animalType && !animals[animalType]) {
      animals[animalType] = new constructors.Animal(animalType);

      if (localAnimals.indexOf(animalType) === -1) {
        localAnimals.push(animalType); // формируем массив с нашими типами животных ['cat', 'dog']

        localStorage.setItem('animals', JSON.stringify(localAnimals)); // превращаем массив в строку
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

      localStorage.setItem('animals', JSON.stringify(localAnimals)); // превращаем массив в строку

      animalTypesSelect.querySelector('option[value="' + selectedAnimal + '"]').remove();
    }
  });

  deleteAllButton.addEventListener('click', function(){
    localStorage.removeItem('animals');

    animals = {};

    animalTypesSelect.innerHTML = '<option value="" disabled="">-- Select --</option>';
  });
});
