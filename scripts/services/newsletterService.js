angular.module("shopper").service("newsletterService", function($http, $q) {

  this.getSubscribers = function() {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/newsletter',
    }).then(function(response) {
      return response.data
    })
  }

  this.newsletterSignup = function(email) {
    return $http({
      method: 'POST',
      url: '//localhost:8080/api/newsletter',
      data: {"email": email}
    })
  }

})
