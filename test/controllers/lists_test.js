'use strict';

describe('TheListApp.lists module', function() {

  beforeEach(module('TheListApp.lists'));

  var $controller;
  var $routeParams;
  var Lists;

  beforeEach(inject(function(_$controller_, _Lists_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $routeParams = {};
    Lists = _Lists_;
  }));

  describe('lists controller', function(){
    var $scope;
    var listsCtrl;

    beforeEach(function() {
      $scope = {};
      listsCtrl = $controller('ListsCtrl', { $scope: $scope, $routeParams: $routeParams, Lists: Lists });
    });

    it('should controller', inject(function() {
      expect(listsCtrl).toBeDefined();
    }));

    it('should items', inject(function() {
      expect($scope.lists).toBeDefined();
      expect($scope.lists.length).toEqual(3);
    }));

    it('should listfilter', inject(function() {
      expect($scope.listfilter).not.toBeDefined();
    }));

/*    describe('tutorial', function(){
      it('should addList', inject(function() {
        expect($scope.addList).toBeDefined();
      }));

      it('should addList add a list', inject(function() {
        expect($scope.lists.length).toEqual(3);
        $scope.addList('a new list');
        expect($scope.lists.length).toEqual(4);
        expect($scope.lists[3].name).toEqual('a new list');
      }));
    });
*/
  });
});