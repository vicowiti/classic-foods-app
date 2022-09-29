const {
  regController,
  authController,
} = require("../controllers/authControllers");

// Routes for Login and Registering
const Router = require("express").Router();

Router.post("/register", regController);

Router.post("/login", authController);

module.exports = Router;
