//node_modules requires

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');

//models

var Product = require('./models/products.model');
var Cart = require('./models/cart.model');
var Category = require('./models/categories.model');
var User = require('./models/user.model')

//mongoose setup

mongoose.connect("mongodb://localhost/shopper");

//express setup

var app = express();
app.use(session({
  secret: '12345'
}));
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(cors());


//get session
app.get('/api/session', function(req, res, next) {
  res.status(200).json(req.sessionID)
})

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

//get product

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
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(category)
    }
  })
})

// get cart
app.get('/api/cart', function(req, res, next) {
  res.status(200).json(cart)
})


//post product
// app.post('/api/products', function(req, res, next) {
//   Product.create(function, err, products) {
//     var newProduct = new Product(req.body);
//     newProduct.save()
//   }
// })

//post to cart
app.post('/api/cart/:id', function(req, res, next) {
  Cart.create(req.body, function (err, cart) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(cart)
    }
  })
})

//post to wishlist
app.post('/api/wishlist/:id', function(req, res, next) {
  wishlist.push(req.body);
  console.log(wishlist)
  res.status(200).json(wishlist);
})

// delete product
app.delete('/api/products/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err, products) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(products)
    }
  })
})




var port = 8080;
app.listen(port, function() {
  console.log('listening to port',port);
})
