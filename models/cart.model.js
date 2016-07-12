var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  items: [{
    product: {
      type: Object,
      ref: "Product"
    },
    quantity: {
      type: Number,
      min: 1
    }
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
