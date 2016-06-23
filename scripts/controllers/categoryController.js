angular.module("shopper").controller("categoryController", function($scope, $state, $stateParams, productService) {

  $scope.categoryProducts = productService.getCategoryProducts($stateParams.category).reverse();


});
