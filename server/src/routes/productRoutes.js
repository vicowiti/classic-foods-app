const express = require("express");
const {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get all products
router.get("/products", getProducts);

// Add new Products
router.post("products", addProducts);

// Update a product
router.put("products/:id", updateProduct);

// Delete a a product
router.post("products/:id", deleteProduct);

module.exports = router;
