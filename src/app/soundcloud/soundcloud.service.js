
(function () {
  'use strict';

  angular
    .module('musechoAngular.soundcloud.services')
    .factory('soundcloudService', soundcloudService);

  /** @ngInject */
  function soundcloudService($log, $http, $q) {

    var api_base = 'https://api.soundcloud.com';
    var client_id = 'dc1471f08aa040a0abcef59beb97d154';

    var service = {
      search: search
    };

    return service;

    function search() {

      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: api_base + '/tracks?client_id=' + client_id + '&q=jezabels'
      }).then(function successCallback(response) {
        deferred.resolve(response);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;

    }

  }

})();
