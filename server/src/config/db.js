const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection successful".cyan);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
