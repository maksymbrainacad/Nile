angular.module('testApp')
  .service('phonesService', function($q, $http) {
    var phones = [];

    return {
      get: function() {
        var def = $q.defer();

        $http.get('/data/phones.json')
          .success(function(phones) {
            def.resolve(phones);
          });

        return def.promise;
      }
    };
  });
