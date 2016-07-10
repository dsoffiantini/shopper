angular.module("shopper").service("cartService", function($http, $q) {

  var userID = 123;

  this.addToCart = function(session, product, quantity) {
    return $http({
      method: 'POST',
      url: '//localhost:8080/api/cart/' + session,
      data: {
        "product": product,
        "quantity": quantity
      }
    })
  }

  this.getCart = function(session) {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/cart/' + session
    }).then(function(cart) {
      return cart.data;
    })
  }

})
