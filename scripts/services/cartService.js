angular.module("shopper").service("cartService", function($http, $q) {

  this.addToCart = function() {
    return $http({
      method: 'POST',
      url: '//localhost:8080/api/cart'
    })
  }

  this.getCart = function() {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/cart'
    }).then(function(cart) {
      return cart.data;
    })
  }

})
