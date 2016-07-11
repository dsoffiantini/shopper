angular.module("shopper").service("productService", function($http, $q) {

  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getProduct = function(id) {
    return $http({
      method: 'GET',
      url: '/api/products/' + id
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getCategories = function() {
    return $http({
      method: 'GET',
      url: '/api/categories'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getCategoryProducts = function(category) {
    return $http({
      method: 'GET',
      url: '/api/categories/' + category
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.deleteProduct = function(productID) {
    return $http({
      method: 'DELETE',
      url: '/api/products/' + productID
    })
  }

  this.searchProducts = function(query) {
    return $http({
      method: 'GET',
      url: '/api/products/search/' + query
    }).then(function(response) {
      return response.data
    }, function(err) {
      console.log(err)
    })
  }

});
