angular.module("shopper").service("brandService", function() {

  var brands = [
    {
      name: "Dior",
      url: "./images/brands/Dior.svg"
    },
    {
      name: "Hugo_Boss",
      url: "./images/brands/Hugo-Boss.svg"
    },
    {
      name: "Prada",
      url: "./images/brands/Prada.svg"
    }
  ]

  this.getBrands = function() {
    return brands;
  };

})
