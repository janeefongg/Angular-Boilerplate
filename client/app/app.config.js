(function () {
  'use strict';

  angular
    .module('app')
    .config(config)
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('dashboard');
      
      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './pages/dashboard/dashboard.html',
            controller: 'DashboardCtrl as vm'
        })
    }

})();