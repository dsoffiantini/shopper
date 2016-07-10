var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  subcategory: String,
  description: String,
  image: String,
  featured: Boolean,
  images: Array
});

module.exports = mongoose.model('Product', productSchema);
