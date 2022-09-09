const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// Get all Products
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Post new Products
const addProducts = async (req, res) => {
  res.json({
    name: "I am the post response",
  });
};

// Update a  Product
const updateProduct = async (req, res) => {
  res.json({
    name: "I am the updated response",
  });
};

// Delete a  Product
const deleteProduct = async (req, res) => {
  res.json({
    name: "I am the deleted response",
  });
};
module.exports = {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
};
