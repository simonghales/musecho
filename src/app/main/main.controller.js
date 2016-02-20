(function() {
  'use strict';

  angular
    .module('musechoAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $state, soundcloudService) {
    var vm = this;

    vm.start = start;

    _activate();

    function _activate() {

      soundcloudService.search()
        .then(function(data) {
          $log.debug("search results", data);
        });

    }

    function start() {
      $state.transitionTo('results');
    }

  }
})();
