'use strict';

// Declare app level module which depends on views, and components
angular.module('TheListApp', [
  'ngRoute',
  'TheListApp.lists'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lists/:listid?', {
    templateUrl: 'views/lists.html',
    controller: 'ListsCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/lists'});
}]);
