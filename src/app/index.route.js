(function() {
  'use strict';

  angular
    .module('musechoAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVM'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'app/results/results.html',
        controller: 'MainController',
        controllerAs: 'mainVM'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
