angular.module("shopper").controller("cartController", function($scope, cartService, userService) {

  // $scope.getSession = function() {
  //   userService.getSession().then(function(session) {
  //     $scope.session = session;
  //     cartService.getCart(session).then(function(cart) {
  //       $scope.cart = cart;
  //     })
  //   })
  // }

  $scope.getCart = function() {
    cartService.getCart().then(function(cart) {
      $scope.cart = cart;
    })
  }

  $scope.getCart();


})
