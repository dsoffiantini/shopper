angular.module("shopper").service("userService", function($http, $q) {

  this.getCart = function() {
    return $http({
      method: 'GET',
      url: '//localhost//api/session',
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.createCart = function() {
    return $http({
      method: 'POST',
      url: '//localhost//api/session',
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

})
