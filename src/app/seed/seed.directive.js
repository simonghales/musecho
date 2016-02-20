(function () {
  'use strict';

  angular
    .module('musechoAngular.seed.directives')
    .directive('seed', seed);

  function seed($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/seed/_seed.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
