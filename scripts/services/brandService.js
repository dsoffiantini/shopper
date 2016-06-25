angular.module("shopper").service("brandService", function() {

  var brands = [
    {
      name: "Dior",
      image: "./images/brands/Dior.svg"
    },
    {
      name: "Hugo_Boss",
      image: "./images/brands/Hugo-Boss.svg"
    },
    {
      name: "Prada",
      image: "./images/brands/Prada.svg"
    }
  ]

  this.getBrands = function() {
    return brands;
  };

})
