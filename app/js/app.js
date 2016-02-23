'use strict';

/* App Module */

console.log('> start');

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    console.log('> routing');
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/d', {
        templateUrl: 'partials/disciplines.html',
        controller: 'DisciplineListCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
