angular.module("shopper").controller("adminController", function($scope, productService) {


  $scope.getProducts = function() {
      productService.getProducts().then(function(products) {
          $scope.products = products;
      });
  }

  $scope.getProducts();

  $scope.deleteProduct = function(product) {
    productService.deleteProduct(product);
  }


})
