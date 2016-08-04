angular.module("shopper").service("newsletterService", function($http, $q) {

  this.getSubscribers = function() {
    return $http({
      method: 'GET',
      url: '/api/newsletter',
    }).then(function(response) {
      return response.data
    })
  }

  this.newsletterSignup = function(email) {
    return $http({
      method: 'POST',
      url: '/api/newsletter',
      data: {"email": email}
    })
  }

})
