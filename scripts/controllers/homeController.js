angular.module('shopper').controller('homeController', function($scope, brandService, productService) {

  $scope.test = "test";

  $scope.products = productService.getProducts();

  $scope.brands = brandService.getBrands();


});
