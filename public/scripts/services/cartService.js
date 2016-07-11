angular.module("shopper").service("cartService", function($http, $q) {

  var userID = 123;

  this.addToCart = function(product) {
    console.log(product);
    return $http({
      method: 'POST',
      url: '//localhost/api/cart/5781cd5f9adbf59025b3882e',
      data: {"product": product}
    })
  }

  this.getCart = function() {
    return $http({
      method: 'GET',
      url: '//localhost/api/cart/5781cd5f9adbf59025b3882e'
    }).then(function(cart) {
      return cart.data;
    })
  }

})
