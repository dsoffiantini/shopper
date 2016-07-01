angular.module("shopper").controller("indexController", function($scope, productService) {

  // $scope.categories = productService.getCategories();

  $scope.getCategories = function() {
    productService.getCategories().then(function(categories) {
      $scope.categories = categories;
    });
  }
  $scope.getCategories();



})
