angular.module("shopper").controller("adminController", function($scope, productService, newsletterService) {


  $scope.getProducts = function() {
      productService.getProducts().then(function(products) {
          $scope.products = products;
      });
  }

  $scope.getProducts();

  $scope.deleteProduct = function(product) {
    productService.deleteProduct(product);
  }

  $scope.getEmails = function() {
      newsletterService.getSubscribers().then(function(emails) {
          $scope.emails = emails;
          console.log(emails)
      });
  }

  $scope.getEmails();


})
