const express = require("express");
const connectDb = require("./src/config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const app = express();
const productHandler = require("./src/routes/productRoutes");
const authHandler = require("./src/routes/authRoutes");
const paymentsHandler = require("./src/routes/mpesaRoutes");

connectDb();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", productHandler);
app.use("/auth/", authHandler);
app.use("/pay/", paymentsHandler);

app.listen(PORT, console.log(`App running on ${PORT}`.bgGreen));
