(function () {
  'use strict';

  angular
    .module('app')
    .config(config)
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('dashboard');
      
      //TODO: modify snippet to condense controller alias keys
      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './pages/dashboard/dashboard.html',
            controller: 'DashboardCtrl as vm'
        })
    }

})();

