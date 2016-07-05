angular.module("shopper").controller("cartController", function($scope, cartService) {

  $scope.test = "test"

  cartService.getCart().then(function(cart) {
    $scope.cart = cart;
    // if (cart.length === 0) {
    //   $('.cart').append(<h3>Your Cart is Empty :(</h3>
    //     You have no items in your Shopping Cart. Bummer.
    //     <br>
    //     Click <a href="/#/">here</a> to continue shopping.)
    // }
  })

})
