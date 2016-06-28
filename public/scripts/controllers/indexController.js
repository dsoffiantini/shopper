angular.module("shopper").controller("indexController", function($scope, productService) {

  $scope.categories = productService.getCategories();

})
