angular.module("shopper").service("cartService", function($http, $q) {

  var userID = 123;

  this.addToCart = function(product, quantity) {
    console.log(product)
    return $http({
      method: 'POST',
      url: '/api/cart/5781cd5f9adbf59025b3882e',
      data: {
        "product": product,
        "quantity": quantity
      }
    })
  }

  this.removeFromCart = function(id) {
    return $http({
      method: 'PUT',
      url: '/api/cart/5781cd5f9adbf59025b3882e/' + id,
    })
  }

  this.getCart = function() {
    return $http({
      method: 'GET',
      url: '/api/cart/5781cd5f9adbf59025b3882e'
    }).then(function(cart) {
      return cart.data;
    })
  }

})
