'use strict';

angular.module('TheListApp.lists',[])

.controller('ListsCtrl', function($scope, $routeParams, Lists) {
    $scope.lists = Lists.getLists();
});