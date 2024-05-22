const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    ItemName: {
        type: String,
        required: true
      },
      Category: {
        type: String,
        required: true
      },
      QuantityInStock: {
        type: Number, 
        required: true
      },
      UnitPrice: {
        type: Number, 
        required: true
      },
      Suppliers: {
        type: String, 
        required: true
      }

})

const Item = mongoose.model('Item',itemSchema);

module.exports = Item;