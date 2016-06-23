angular.module("shopper").controller("adminController", function($scope, productService) {

  $scope.products = productService.getProducts();

})
