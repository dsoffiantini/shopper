angular.module("shopper").service("wishlistService", function($http, $q) {

  this.getWishlist = function() {

    return $http({
      method: 'GET',
      url: '//localhost:8080/api/wishlist'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.addToWishlist = function(product) {
    return $http({
      method: 'POST',
      url: '//localhost:8080/api/wishlist',
      body: product
    })
  }



})
