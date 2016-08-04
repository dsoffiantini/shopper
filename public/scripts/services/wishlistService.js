angular.module("shopper").service("wishlistService", function($http, $q) {

  this.getWishlist = function() {

    return $http({
      method: 'GET',
      url: '/api/wishlist'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.addToWishlist = function(product) {
    return $http({
      method: 'POST',
      url: '/api/wishlist',
      body: product
    })
  }



})
