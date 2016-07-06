angular.module("shopper").controller("indexController", function($scope, newsletterService, productService, cartService) {

  // $scope.categories = productService.getCategories();

  $scope.getCategories = function() {
    productService.getCategories().then(function(categories) {
      $scope.categories = categories;
    });
  }
  $scope.getCategories();

  cartService.getCart().then(function(cart) {
    if (cart.length === 0) {
      $scope.cart = "Your cart is empty"
    }
    else {
      $scope.cart = cart;
    }
  });

  $scope.submitEmail = function(email) {
    newsletterService.newsletterSignup(email);
  }



})
