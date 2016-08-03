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
      $scope.total = 0;
      for (var i = 0; i < cart.items.length; i++) {
          console.log(cart.items[i].product.price);
          $scope.total += cart.items[i].product.price;
      }

    })
  }

  $scope.getCart();

  $scope.removeFromCart = function(product) {
    cartService.removeFromCart(product._id).then(function() {
      $scope.getCart();
    })
  }


})
