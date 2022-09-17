const express = require("express");
const connectDb = require("./src/db/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT;
const app = express();
const productHandler = require("./src/routes/productRoutes");

connectDb();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", productHandler);

app.listen(PORT, console.log(`App running on ${PORT}`.bgGreen));
