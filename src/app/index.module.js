(function() {
  'use strict';

  angular
    .module('musechoAngular', [

      'musechoAngular.seed',
      'musechoAngular.soundcloud',

      'ngAnimate',
      'ui.router',
      'toastr'
    ]);

  angular.module('musechoAngular.seed', [
    'musechoAngular.seed.directives'
  ]);

  angular.module('musechoAngular.seed.directives', []);

  angular.module('musechoAngular.soundcloud', [
    'musechoAngular.soundcloud.services'
  ]);

  angular.module('musechoAngular.soundcloud.services', []);

})();
