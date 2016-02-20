(function() {
  'use strict';

  angular
    .module('musechoAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
