angular.module("shopper").service("adminService", function($http, $q) {

  // this.postNewProduct = function() {
  //   return $http
  // }

  this.deleteProduct = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/products/' + id
    })
  }

})
