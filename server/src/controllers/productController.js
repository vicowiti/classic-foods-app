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
  const { name, price, description, category, imgUrl } = req.body;

  if (name && price && description && category && imgUrl) {
    const product = await Product.create({
      name,
      price,
      description,
      category,
      imgUrl,
    });

    res.status(201).json(product);
  } else {
    res.status(500);
    throw new Error("Add all required fields");
  }
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
