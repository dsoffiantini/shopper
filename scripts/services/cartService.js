angular.module("shopper").service("cartService", function($http, $q) {

  this.addToCart = function() {
    return $http({
      method: 'POST',
      url: '//localhost:8080/api/cart'
    })
  }

})
