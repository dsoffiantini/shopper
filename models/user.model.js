var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  cart: {
    type: String,
    ref: "Cart"
  }
});

module.exports = mongoose.model('User', userSchema);
