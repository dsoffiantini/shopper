angular.module("shopper").service("cartService", function($http, $q) {

  var userID = 123;

  this.addToCart = function(product) {
    return $http({
      method: 'PUT',
      url: '//localhost:8080/api/cart/' + userID,
      body: product
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
