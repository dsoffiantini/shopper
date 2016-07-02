//node_modules requires

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var passport = require('passport');

//controllers

// var cart = require('./serverControllers/cartCtrl');
// var orders = require('./serverControllers/orderCtrl');
// var users = require('./serverControllers/userCtrl');

//models

var Product = require('./models/products.model');
var Category = require('./models/categories.model')

//express setup

var app = express();
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(cors());

//mongoose setup

mongoose.connect("mongodb://localhost/shopper");

var cart = [{
  name: "product",
  quantity: 12
},
{
  name: "product2",
  quantity: 5
}]

//get products
app.get('/api/products', function(req, res, next) {
  Product.find(function(err, products) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(products)
    }
  })
})

// //get product

app.get('/api/products/:id', function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    console.log(req.body)
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(product)
    }
  })
})



//get categories
app.get('/api/categories', function(req, res, next) {
  Category.find(function(err, categories) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(categories)
    }
  })
})

//get category products
app.get('/api/categories/:id', function(req, res, next) {
  Product.find({category: req.params.id}, function(err, category) {
    console.log(req.body)
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(category)
    }
  })
})

// get cart
app.get('/api/cart', function(req, res, next) {
  res.status(200).json(cart);
})


//post product
app.post('/api/products', function(req, res, next) {
  products.push(req.body);
  res.status(200).json(products);
})

//post to cart
app.post('/api/cart/', function(req, res, next) {
  cart.push(req.body);
  res.status(200).json(cart);
})

//post to wishlist
app.post('/api/wishlist', function(req, res, next) {
  wishlist.push(req.body);
  console.log(wishlist)
  res.status(200).json(wishlist);
})

// delete product ---fix
app.delete('/api/products/:id', function(req, res, next) {

})




var port = 8080;
app.listen(port, function() {
  console.log('listening to port',port);
})
