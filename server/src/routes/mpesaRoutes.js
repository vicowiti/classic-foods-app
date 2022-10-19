const express = require("express");
const {
  getAccessToken,
  registerUrls,
  setStk,
} = require("../controllers/paymentController");
const mpesaMiddleware = require("../middleware/mpesaMiddleware");

const Router = express.Router();

// Getting access tokens
Router.get("/access_token", mpesaMiddleware, getAccessToken);

Router.get("/register", mpesaMiddleware, registerUrls);

Router.post("/stk", mpesaMiddleware, setStk);

module.exports = Router;
