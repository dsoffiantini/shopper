angular.module("shopper").controller("cartController", function($scope, cartService) {

  $scope.test = "test"

  cartService.getCart().then(function(cart) {
    $scope.cart = cart;
    console.log($scope.cart)
  })

})
