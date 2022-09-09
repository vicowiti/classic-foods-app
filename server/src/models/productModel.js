const mongoose = require("mongoose");

// categorySchema = mongoose.Schema({});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adjective: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
