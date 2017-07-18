angular.module('testApp').service('phonesService', function($q, $http) {     // для приложения testApp, создали сервис service, $q - angular модуль для обещаний чего нибудь, $http - angular метод для аяксовых запросов

  var phones = [];

  return {
    get: function () {
      var def = $q.defer(); // defer обещает что то вернуть

      $http.get('/data/phones.json').success(function(phones) {
        def.resolve(phones);   // resolve возвращает результат phones
      })
      return def.promise;  // promise обещание что то вернуть
    }
  };
});
